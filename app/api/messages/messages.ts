/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
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
  GetApiChatsChatIdMessagesNewParams,
  GetApiChatsChatIdMessagesOlderParams,
  Message,
  PostApiChatsChatIdMessagesBody
} from '../../types/api';





/**
 * @summary Get the most recent messages for a chat.
 */
export const getApiChatsChatIdMessages = (
    chatId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Message[]>> => {
    
    
    return axios.get(
      `https://dev-api.planandpan.com/api/chats/${chatId}/messages`,options
    );
  }


export const getGetApiChatsChatIdMessagesQueryKey = (chatId: string,) => {
    return [`https://dev-api.planandpan.com/api/chats/${chatId}/messages`] as const;
    }

    
export const getGetApiChatsChatIdMessagesQueryOptions = <TData = Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError = AxiosError<void>>(chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiChatsChatIdMessagesQueryKey(chatId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>> = ({ signal }) => getApiChatsChatIdMessages(chatId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(chatId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiChatsChatIdMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>>
export type GetApiChatsChatIdMessagesQueryError = AxiosError<void>


export function useGetApiChatsChatIdMessages<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError = AxiosError<void>>(
 chatId: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChatsChatIdMessages>>,
          TError,
          Awaited<ReturnType<typeof getApiChatsChatIdMessages>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChatsChatIdMessages<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError = AxiosError<void>>(
 chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChatsChatIdMessages>>,
          TError,
          Awaited<ReturnType<typeof getApiChatsChatIdMessages>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChatsChatIdMessages<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError = AxiosError<void>>(
 chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get the most recent messages for a chat.
 */

export function useGetApiChatsChatIdMessages<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError = AxiosError<void>>(
 chatId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessages>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiChatsChatIdMessagesQueryOptions(chatId,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Send a new message in a chat.
 */
export const postApiChatsChatIdMessages = (
    chatId: string,
    postApiChatsChatIdMessagesBody: PostApiChatsChatIdMessagesBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Message>> => {
    
    const formData = new FormData();
if(postApiChatsChatIdMessagesBody.chatId !== undefined) {
 formData.append(`chatId`, postApiChatsChatIdMessagesBody.chatId)
 }
if(postApiChatsChatIdMessagesBody.sender !== undefined) {
 formData.append(`sender`, postApiChatsChatIdMessagesBody.sender)
 }
if(postApiChatsChatIdMessagesBody.content !== undefined) {
 formData.append(`content`, postApiChatsChatIdMessagesBody.content)
 }
if(postApiChatsChatIdMessagesBody.files !== undefined) {
 postApiChatsChatIdMessagesBody.files.forEach(value => formData.append(`files`, value));
 }

    return axios.post(
      `https://dev-api.planandpan.com/api/chats/${chatId}/messages`,
      formData,options
    );
  }



export const getPostApiChatsChatIdMessagesMutationOptions = <TError = AxiosError<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChatsChatIdMessages>>, TError,{chatId: string;data: PostApiChatsChatIdMessagesBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChatsChatIdMessages>>, TError,{chatId: string;data: PostApiChatsChatIdMessagesBody}, TContext> => {

const mutationKey = ['postApiChatsChatIdMessages'];
const {mutation: mutationOptions, axios: axiosOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, axios: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChatsChatIdMessages>>, {chatId: string;data: PostApiChatsChatIdMessagesBody}> = (props) => {
          const {chatId,data} = props ?? {};

          return  postApiChatsChatIdMessages(chatId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChatsChatIdMessagesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChatsChatIdMessages>>>
    export type PostApiChatsChatIdMessagesMutationBody = PostApiChatsChatIdMessagesBody
    export type PostApiChatsChatIdMessagesMutationError = AxiosError<void>

    /**
 * @summary Send a new message in a chat.
 */
export const usePostApiChatsChatIdMessages = <TError = AxiosError<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChatsChatIdMessages>>, TError,{chatId: string;data: PostApiChatsChatIdMessagesBody}, TContext>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChatsChatIdMessages>>,
        TError,
        {chatId: string;data: PostApiChatsChatIdMessagesBody},
        TContext
      > => {

      const mutationOptions = getPostApiChatsChatIdMessagesMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    /**
 * @summary Get older messages from a chat.
 */
export const getApiChatsChatIdMessagesOlder = (
    chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Message[]>> => {
    
    
    return axios.get(
      `https://dev-api.planandpan.com/api/chats/${chatId}/messages/older`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetApiChatsChatIdMessagesOlderQueryKey = (chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams,) => {
    return [`https://dev-api.planandpan.com/api/chats/${chatId}/messages/older`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiChatsChatIdMessagesOlderQueryOptions = <TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError = AxiosError<void>>(chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiChatsChatIdMessagesOlderQueryKey(chatId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>> = ({ signal }) => getApiChatsChatIdMessagesOlder(chatId,params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(chatId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiChatsChatIdMessagesOlderQueryResult = NonNullable<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>>
export type GetApiChatsChatIdMessagesOlderQueryError = AxiosError<void>


export function useGetApiChatsChatIdMessagesOlder<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>,
          TError,
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChatsChatIdMessagesOlder<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>,
          TError,
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChatsChatIdMessagesOlder<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get older messages from a chat.
 */

export function useGetApiChatsChatIdMessagesOlder<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesOlderParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesOlder>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiChatsChatIdMessagesOlderQueryOptions(chatId,params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get new messages from a chat.
 */
export const getApiChatsChatIdMessagesNew = (
    chatId: string,
    params: GetApiChatsChatIdMessagesNewParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Message[]>> => {
    
    
    return axios.get(
      `https://dev-api.planandpan.com/api/chats/${chatId}/messages/new`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetApiChatsChatIdMessagesNewQueryKey = (chatId: string,
    params: GetApiChatsChatIdMessagesNewParams,) => {
    return [`https://dev-api.planandpan.com/api/chats/${chatId}/messages/new`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiChatsChatIdMessagesNewQueryOptions = <TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError = AxiosError<void>>(chatId: string,
    params: GetApiChatsChatIdMessagesNewParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiChatsChatIdMessagesNewQueryKey(chatId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>> = ({ signal }) => getApiChatsChatIdMessagesNew(chatId,params, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(chatId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiChatsChatIdMessagesNewQueryResult = NonNullable<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>>
export type GetApiChatsChatIdMessagesNewQueryError = AxiosError<void>


export function useGetApiChatsChatIdMessagesNew<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesNewParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>,
          TError,
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChatsChatIdMessagesNew<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesNewParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>,
          TError,
          Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>
        > , 'initialData'
      >, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChatsChatIdMessagesNew<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesNewParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get new messages from a chat.
 */

export function useGetApiChatsChatIdMessagesNew<TData = Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError = AxiosError<void>>(
 chatId: string,
    params: GetApiChatsChatIdMessagesNewParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChatsChatIdMessagesNew>>, TError, TData>>, axios?: AxiosRequestConfig}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiChatsChatIdMessagesNewQueryOptions(chatId,params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



