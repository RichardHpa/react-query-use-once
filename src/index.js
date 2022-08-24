import { useQuery } from 'react-query';

const useQueryOnce = (key, query, params = {}) => {
  const queryResult = useQuery(key, query, {
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...params,
  });
  return queryResult;
};

module.exports = { useQueryOnce };
