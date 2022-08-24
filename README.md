# React Query Use Once

[![RichardHpa - react-query-use-once](https://img.shields.io/static/v1?label=RichardHpa&message=react-query-use-once&color=blue&logo=github)](https://github.com/RichardHpa/react-query-use-once)
[![stars - react-query-use-once](https://img.shields.io/github/stars/RichardHpa/react-query-use-once?style=social)](https://github.com/RichardHpa/react-query-use-once)
[![forks - react-query-use-once](https://img.shields.io/github/forks/RichardHpa/react-query-use-once?style=social)](https://github.com/RichardHpa/react-query-use-once)

[![Node.js CI](https://github.com/RichardHpa/react-query-use-once/workflows/Node.js%20CI/badge.svg)](https://github.com/RichardHpa/react-query-use-once/actions?query=workflow:"Node.js+CI")
[![codecov coverage](https://img.shields.io/codecov/c/github/RichardHpa/react-query-use-once.svg?style=flat-square)](https://github.com/RichardHpa/react-query-use-once)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

A extension for react-query to prevent auto refetching of a query.

## Background

In a few of my projects, I have ran into a scenario where I don't want a query to refetch by default. This hook includes the query params to prevent the auto refetching from happening. You can use all the usual react-query options and get the same values from the result.  
Even though the default refetching isn't happening you can still manually triggering a refetch via the query cache.

## Installation

Using npm:

```sh
$ npm install react-query-use-once
```

## Example

```javascript
import { useQueryOnce } from 'react-query-use-once';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  // Retrieve information about Luke Skywalker from Star Wars
  const { isLoading, error, data } = useQueryOnce('repoData', () =>
    fetch('https://swapi.dev/api/people/1/').then(res => res.json())
  );

  if (isLoading) return 'Loading...';

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.birth_year}</p>
      <p>{data.gender}</p>
    </div>
  );
}
```

## React Query Docs

Visit [react-query.tanstack.com](https://react-query.tanstack.com) for docs, guides, API and more

## License

[react-query](https://github.com/tannerlinsley/react-query) is created by [Tanner Linsley](https://tannerlinsley.com/)
