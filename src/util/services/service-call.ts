import ServiceConfiguration from './service-configuration';

const CallApi = async ({
  endpoint,
  config,
  queryVariables,
}: {
  endpoint: string;
  config: ServiceConfiguration;
  queryVariables?: string;
}) => {
  const baseUrl: string = createBaseUrl({ endpoint, config });
  const fetchUrl: string = queryVariables
    ? `${baseUrl}&${queryVariables}`
    : baseUrl;
  const response = await fetch(fetchUrl);
  return await response.json();
};

const createBaseUrl = ({
  endpoint,
  config,
}: {
  endpoint: string;
  config: ServiceConfiguration;
}) => {
  switch (config.type) {
    case 'PUBLIC' || 'DEV':
      return `${config.url}/${endpoint}`;
    case 'PRIVATE':
      return `${config.url}/${endpoint}?token=${config.key}`;
    default:
      throw new Error('Was not given a proper type to create the url');
  }
};

export default CallApi;
