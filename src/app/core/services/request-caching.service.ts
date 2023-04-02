import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageFieldNames } from '../constants/local-storage';
import { CachedResponse, LocalCache } from '../models/request-caching.models';
import { MAX_AGE_CACHING } from '../constants/request-caching';
import getCurrentTimeInSeconds from '../utils/getCurrentTimeInSeconds';

@Injectable({
  providedIn: 'root',
})
export class RequestCachingService {
  private cache = this.localCache ? new Map(this.localCache) : new Map();

  constructor(private localService: LocalStorageService) {}

  private get localCache(): LocalCache {
    if (this.localService.exists(LocalStorageFieldNames.cache)) {
      return JSON.parse(this.localService.get(LocalStorageFieldNames.cache));
    }
    return null;
  }

  public getCachedResponse(req: HttpRequest<unknown>): CachedResponse {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = getCurrentTimeInSeconds() - cached.lastRead > MAX_AGE_CACHING;
    return isExpired ? undefined : cached.response;
  }

  public cacheResponse(req: HttpRequest<unknown>, response: HttpResponse<unknown>): void {
    const url = req.urlWithParams;
    const cacheEntry = { url, response, lastRead: getCurrentTimeInSeconds() };

    this.cache.set(url, cacheEntry);

    this.cache.forEach((expiredEntry) => {
      const isExpired = getCurrentTimeInSeconds() - expiredEntry.lastRead > MAX_AGE_CACHING;
      if (isExpired) {
        this.cache.delete(expiredEntry.url);
      }
    });

    const json = JSON.stringify(Array.from(this.cache.entries()));
    this.localService.set(LocalStorageFieldNames.cache, json);
  }
}
