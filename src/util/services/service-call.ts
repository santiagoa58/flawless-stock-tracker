import ServiceConfiguration from './service-configuration';

const CallApi = async ({
  config,
  endpoint,
  queryVariables,
}: {
  config: ServiceConfiguration;
  endpoint: string;
  queryVariables?: string;
}): Promise<JSON> => {
  const baseUrl = createBaseUrl({ config, endpoint });
  const fetchUrl = queryVariables ? `${baseUrl}&${queryVariables}` : baseUrl;
  const response = await fetch(fetchUrl);
  return await response.json();
};

const createBaseUrl = ({
  config,
  endpoint,
}: {
  config: ServiceConfiguration;
  endpoint: string;
}): string => {
  const { url, type, key } = config;
  switch (type) {
    case 'PUBLIC':
      return `${url}/${endpoint}?token=0`;
    case 'PRIVATE' || 'DEV':
      return `${url}/${endpoint}?token=${key}`;
    default:
      throw new Error('Was not given a proper type to create the url');
  }
};

export default CallApi;
