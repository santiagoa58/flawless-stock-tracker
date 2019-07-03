import ServiceConfiguration from './service-configuration';
import {
  DEV_API_URL,
  DEV_API_KEY,
  PUBLIC_API_URL,
  PRIVATE_API_URL,
  PRIVATE_API_KEY,
} from './service-constants';

export const PUBLIC_SERVICE: ServiceConfiguration = {
  type: 'PUBLIC',
  url: PUBLIC_API_URL,
};

export const DEV_SERVICE: ServiceConfiguration = {
  type: 'DEV',
  url: DEV_API_URL,
  key: DEV_API_KEY,
};

export const PRIVATE_SERVICE: ServiceConfiguration = {
  type: 'PRIVATE',
  url: PRIVATE_API_URL,
  key: PRIVATE_API_KEY,
};
