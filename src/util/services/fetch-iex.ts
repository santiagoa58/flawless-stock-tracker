import { ServiceConfiguration } from './configurations';
import { QueryParameters } from './types';

export const fetchIex = async <T>(
  configuration: ServiceConfiguration,
  path: string,
  parameters?: QueryParameters<string>
): Promise<T> => {
  const endpoint = createEndpoint(configuration, path, parameters);
  const response = await fetch(endpoint);
  return response.json();
};

const createEndpoint = (
  configuration: ServiceConfiguration,
  path: string,
  parameters?: QueryParameters<string>
): string => {
  const { hostname, type, key } = configuration;
  const queryParameters = parameters ? createParameters(parameters) : '';
  switch (type) {
    case 'PUBLIC':
      return `${hostname}/${path}?${queryParameters}`;
    case 'PRIVATE' || 'DEV':
      return `${hostname}/${path}?token=${key}&${queryParameters}`;
    default:
      throw new Error('Was not given a proper type to create the url');
  }
};

const createParameters = (parameters: QueryParameters<string>): string => {
  return Object.entries(parameters)
    .map(entry => {
      const [key, value] = entry;
      return `${key}=${value}`;
    })
    .join('&');
};
