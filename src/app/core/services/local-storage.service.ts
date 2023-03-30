import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public get(fieldName: string): string {
    return localStorage.getItem(fieldName) as string;
  }
  public set(fieldName: string, value: string): void {
    localStorage.setItem(fieldName, value);
  }

  public remove(fieldName: string): void {
    if (this.exists(fieldName)) {
      localStorage.removeItem(fieldName);
    }
  }

  public exists(fieldName: string): boolean {
    return Boolean(localStorage.getItem(fieldName));
  }

  public clear(): void {
    Object.keys(localStorage).forEach((el) => {
      localStorage.removeItem(el);
    });
  }
}
