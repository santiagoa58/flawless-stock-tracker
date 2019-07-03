import ServiceConfiguration from './service-configuration';
import {
  DEV_API_URL,
  PUBLIC_API_URL,
  PRIVATE_API_URL,
  PRIVATE_API_KEY,
} from './service-constants';

export const PUBLIC_SERVICE: ServiceConfiguration = {
  url: PUBLIC_API_URL,
  type: 'PUBLIC',
};

export const DEV_SERVICE: ServiceConfiguration = {
  url: DEV_API_URL,
  type: 'DEV',
};

export const PRIVATE_SERVICE: ServiceConfiguration = {
  url: PRIVATE_API_URL,
  key: PRIVATE_API_KEY,
  type: 'PRIVATE',
};
