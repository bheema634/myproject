// src/app/app.config.ts
import { environment } from '../environments/environment';

export const AppConfig = {
  apiBaseUrl: environment.apiBaseUrl,
  featureFlag: true,
  defaultPageSize: 10,
  environment: environment.production ? 'production' : 'development'
};

  