import { useQuery } from 'react-query'

export const useQueryOnce = (key, query, params = {}) => {
	const queryResult = useQuery(key, query, {
		refetchInterval: false,
		refetchIntervalInBackground: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		...params,
	})
	return queryResult
}
