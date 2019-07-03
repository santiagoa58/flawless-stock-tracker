import CallApi from './services/service-call';
import { PUBLIC_SERVICE } from './services/configurations';

export const FetchTimeSeries = ({
  companySymbol,
  range,
}: {
  companySymbol: string;
  range: number;
}) => {
  return publicFetch({
    endpoint: `stock/${companySymbol}/time-series/${range}`,
  });
};

const publicFetch = ({
  endpoint,
  queryVariables,
}: {
  endpoint: string;
  queryVariables?: string;
}) => {
  const fetchConfig = {
    endpoint: endpoint,
    config: PUBLIC_SERVICE,
    queryVariables: queryVariables,
  };
  return CallApi(fetchConfig);
};
