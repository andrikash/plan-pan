/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

import type {
  GetChatChatId200,
  GetChatChatId400,
  GetChatChatId500
} from '../../types/api';





/**
 * Fetches all file attachments from messages in a specified chat, sorted by creation date in descending order.
 * @summary Retrieve all attachments in a chat.
 */
export const getChatChatId = (
    chatId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetChatChatId200>> => {
    
    
    return axios.get(
      `https://dev-api.planandpan.com/chat/${chatId}`,options
    );
  }


export const getGetChatChatIdQueryKey = (chatId: string,) => {
    return [`https://dev-api.planandpan.com/chat/${chatId}`] as const;
    }

    
export const getGetChatChatIdQueryOptions = <TData = Awaited<ReturnType<typeof getChatChatId>>, TError = AxiosError<GetChatChatId400 | GetChatChatId500>>(chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatChatId>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetChatChatIdQueryKey(chatId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getChatChatId>>> = ({ signal }) => getChatChatId(chatId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(chatId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getChatChatId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetChatChatIdQueryResult = NonNullable<Awaited<ReturnType<typeof getChatChatId>>>
export type GetChatChatIdQueryError = AxiosError<GetChatChatId400 | GetChatChatId500>


export function useGetChatChatId<TData = Awaited<ReturnType<typeof getChatChatId>>, TError = AxiosError<GetChatChatId400 | GetChatChatId500>>(
 chatId: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatChatId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChatChatId>>,
          TError,
          Awaited<ReturnType<typeof getChatChatId>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChatChatId<TData = Awaited<ReturnType<typeof getChatChatId>>, TError = AxiosError<GetChatChatId400 | GetChatChatId500>>(
 chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatChatId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChatChatId>>,
          TError,
          Awaited<ReturnType<typeof getChatChatId>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChatChatId<TData = Awaited<ReturnType<typeof getChatChatId>>, TError = AxiosError<GetChatChatId400 | GetChatChatId500>>(
 chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatChatId>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Retrieve all attachments in a chat.
 */

export function useGetChatChatId<TData = Awaited<ReturnType<typeof getChatChatId>>, TError = AxiosError<GetChatChatId400 | GetChatChatId500>>(
 chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatChatId>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetChatChatIdQueryOptions(chatId,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



