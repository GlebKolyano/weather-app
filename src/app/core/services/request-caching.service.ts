import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

const MAX_AGE = 7200;

@Injectable({
  providedIn: 'root',
})
export class RequestCachingService {
  private cache = this.localCache ? new Map(this.localCache) : new Map();

  constructor(private localService: LocalStorageService) {}

  private get localCache(): [string, string][] | null {
    if (this.localService.exists('cache')) {
      return JSON.parse(this.localService.get('cache'));
    }

    return null;
  }

  public getCachedResponse(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = Date.now() / 1000 - cached.lastRead > MAX_AGE;

    return isExpired ? undefined : cached.response;
  }

  public cacheResponse(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const cacheEntry = { url, response, lastRead: Date.now() / 1000 };

    this.cache.set(url, cacheEntry);

    this.cache.forEach((expiredEntry) => {
      if (Date.now() / 1000 - expiredEntry.lastRead > MAX_AGE) {
        this.cache.delete(expiredEntry.url);
      }
    });

    const json = JSON.stringify(Array.from(this.cache.entries()));
    this.localService.set('cache', json);
  }
}
