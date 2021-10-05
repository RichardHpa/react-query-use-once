import { jest } from '@jest/globals'
import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useQueryOnce } from '.'

const fetchFromApi = async (url) => {
	const res = await fetch(url)
	const payload = await res.json()
	return payload
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})
const wrapper = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useQueryOnce', () => {
	it('should should call successfully', async () => {
		const { result, waitFor } = renderHook(
			() => useQueryOnce('key', () => fetchFromApi('/getPosts')),
			{
				wrapper,
			}
		)
		jest.setTimeout(10000)
		await waitFor(() => result.current.isSuccess)
		expect(result.current.data).toEqual('Hello World')
	})
})

// test("should fetch", async () => {
// 	await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1), { timeout: 8000 });
// }, 10000);
