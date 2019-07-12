import { ServiceConfiguration } from './configurations';
import { MapObject } from '../types';

export const fetchIex = async <T>(
  configuration: ServiceConfiguration,
  path: string,
  parameters?: MapObject<string>
): Promise<T> => {
  const endpoint = createEndpoint(configuration, path, parameters);
  const response = await fetch(endpoint);
  return response.json();
};

export const createEndpoint = (
  configuration: ServiceConfiguration,
  path: string,
  parameters?: MapObject<string>
): string => {
  const { hostname, type, key } = configuration;
  const MapObject = parameters ? createParameters(parameters) : '';
  switch (type) {
    case 'PUBLIC':
      return `${hostname}/${path}?${MapObject}`;
    case 'DEV':
      return `${hostname}/${path}?token=${key}&${MapObject}`;
    case 'PRIVATE':
      return `${hostname}/${path}?token=${key}&${MapObject}`;
    default:
      throw new Error('Was not given a proper type to create the url');
  }
};

export const createParameters = (parameters: MapObject<string>): string => {
  return Object.entries(parameters)
    .map(entry => {
      const [key, value] = entry;
      return `${key}=${value}`;
    })
    .join('&');
};
