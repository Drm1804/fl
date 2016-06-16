import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { DataService } from './shared/services/data.services';
export const APP_PROVIDERS = [
  DataService,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
];
