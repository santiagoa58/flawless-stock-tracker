import CallApi from './services/service-call';
import { PUBLIC_SERVICE } from './services/configurations';

export const FetchTimeSeries = ({
  companySymbol,
  range = '',
}: {
  companySymbol: string;
  range?: string;
}): Promise<JSON> =>
  publicFetch({
    endpoint: `stock/${companySymbol}/time-series/${range}`,
  });

const publicFetch = ({
  endpoint,
  queryVariables,
}: {
  endpoint: string;
  queryVariables?: string;
}): Promise<JSON> => {
  const fetchConfig = {
    endpoint: endpoint,
    config: PUBLIC_SERVICE,
    queryVariables: queryVariables,
  };
  return CallApi(fetchConfig);
};
