import {
  DEV_API_URL,
  DEV_API_KEY,
  PUBLIC_API_URL,
  PRIVATE_API_URL,
  PRIVATE_API_KEY,
} from './constants';

export interface ServiceConfiguration {
  readonly hostname: string;
  readonly type: string;
  readonly key?: string;
}

export const PUBLIC_SERVICE: ServiceConfiguration = {
  type: 'PUBLIC',
  hostname: PUBLIC_API_URL,
};

export const DEV_SERVICE: ServiceConfiguration = {
  type: 'DEV',
  hostname: DEV_API_URL,
  key: DEV_API_KEY,
};

export const PRIVATE_SERVICE: ServiceConfiguration = {
  type: 'PRIVATE',
  hostname: PRIVATE_API_URL,
  key: PRIVATE_API_KEY,
};
