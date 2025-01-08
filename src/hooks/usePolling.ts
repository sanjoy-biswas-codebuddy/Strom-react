import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function usePolling<TData = unknown, TError = unknown>(
    queryKey: string[],
    queryFn: () => Promise<TData>,
    options: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> = {}
) {
    return useQuery<TData, TError>({
        queryKey,
        queryFn,
        refetchInterval: 5000,
        ...options
    })
}

