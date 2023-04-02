import { HttpResponse } from '@angular/common/http';

type LocalCache = [string, string][] | null;
type CachedResponse = HttpResponse<unknown> | undefined;

export type { LocalCache, CachedResponse };
