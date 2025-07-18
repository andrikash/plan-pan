/**
 * Generated by orval v7.10.0 🍺
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

import type {
  CreateOrderRequest,
  GetApiOrders200,
  GetApiOrders500,
  GetApiOrdersParams,
  Order
} from '../../types/api';

import { customInstance } from '.././mutator/custom-instance';
import type { ErrorType , BodyType } from '.././mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * @summary Create a new order.
 */
export const postApiOrders = (
    createOrderRequest: BodyType<CreateOrderRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      const formData = new FormData();
formData.append(`workType`, createOrderRequest.workType)
formData.append(`subjectArea`, createOrderRequest.subjectArea)
formData.append(`email`, createOrderRequest.email)
formData.append(`deadline`, createOrderRequest.deadline)
formData.append(`pages`, createOrderRequest.pages.toString())
if(createOrderRequest.phoneNumber !== undefined) {
 formData.append(`phoneNumber`, createOrderRequest.phoneNumber)
 }
if(createOrderRequest.firstName !== undefined) {
 formData.append(`firstName`, createOrderRequest.firstName)
 }
if(createOrderRequest.lastName !== undefined) {
 formData.append(`lastName`, createOrderRequest.lastName)
 }
if(createOrderRequest.files !== undefined) {
 createOrderRequest.files.forEach(value => formData.append(`files`, value));
 }

      return customInstance<Order>(
      {url: `/api/orders`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData, signal
    },
      options);
    }
  


export const getPostApiOrdersMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiOrders>>, TError,{data: BodyType<CreateOrderRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiOrders>>, TError,{data: BodyType<CreateOrderRequest>}, TContext> => {

const mutationKey = ['postApiOrders'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiOrders>>, {data: BodyType<CreateOrderRequest>}> = (props) => {
          const {data} = props ?? {};

          return  postApiOrders(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiOrders>>>
    export type PostApiOrdersMutationBody = BodyType<CreateOrderRequest>
    export type PostApiOrdersMutationError = ErrorType<void>

    /**
 * @summary Create a new order.
 */
export const usePostApiOrders = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiOrders>>, TError,{data: BodyType<CreateOrderRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiOrders>>,
        TError,
        {data: BodyType<CreateOrderRequest>},
        TContext
      > => {

      const mutationOptions = getPostApiOrdersMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    /**
 * @summary Get all orders with optional filters, sorting, and pagination.
 */
export const getApiOrders = (
    params?: GetApiOrdersParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<GetApiOrders200>(
      {url: `/api/orders`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetApiOrdersQueryKey = (params?: GetApiOrdersParams,) => {
    return [`/api/orders`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiOrdersQueryOptions = <TData = Awaited<ReturnType<typeof getApiOrders>>, TError = ErrorType<GetApiOrders500>>(params?: GetApiOrdersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrders>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiOrdersQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiOrders>>> = ({ signal }) => getApiOrders(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiOrders>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiOrders>>>
export type GetApiOrdersQueryError = ErrorType<GetApiOrders500>


export function useGetApiOrders<TData = Awaited<ReturnType<typeof getApiOrders>>, TError = ErrorType<GetApiOrders500>>(
 params: undefined |  GetApiOrdersParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrders>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiOrders>>,
          TError,
          Awaited<ReturnType<typeof getApiOrders>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiOrders<TData = Awaited<ReturnType<typeof getApiOrders>>, TError = ErrorType<GetApiOrders500>>(
 params?: GetApiOrdersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrders>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiOrders>>,
          TError,
          Awaited<ReturnType<typeof getApiOrders>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiOrders<TData = Awaited<ReturnType<typeof getApiOrders>>, TError = ErrorType<GetApiOrders500>>(
 params?: GetApiOrdersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrders>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all orders with optional filters, sorting, and pagination.
 */

export function useGetApiOrders<TData = Awaited<ReturnType<typeof getApiOrders>>, TError = ErrorType<GetApiOrders500>>(
 params?: GetApiOrdersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrders>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiOrdersQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get a specific order by ID.
 */
export const getApiOrdersId = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Order>(
      {url: `/api/orders/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiOrdersIdQueryKey = (id: string,) => {
    return [`/api/orders/${id}`] as const;
    }

    
export const getGetApiOrdersIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiOrdersId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrdersId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiOrdersIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiOrdersId>>> = ({ signal }) => getApiOrdersId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiOrdersId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiOrdersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiOrdersId>>>
export type GetApiOrdersIdQueryError = ErrorType<void>


export function useGetApiOrdersId<TData = Awaited<ReturnType<typeof getApiOrdersId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrdersId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiOrdersId>>,
          TError,
          Awaited<ReturnType<typeof getApiOrdersId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiOrdersId<TData = Awaited<ReturnType<typeof getApiOrdersId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrdersId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiOrdersId>>,
          TError,
          Awaited<ReturnType<typeof getApiOrdersId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiOrdersId<TData = Awaited<ReturnType<typeof getApiOrdersId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrdersId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get a specific order by ID.
 */

export function useGetApiOrdersId<TData = Awaited<ReturnType<typeof getApiOrdersId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiOrdersId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiOrdersIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Update an existing order (Admin only).
 */
export const putApiOrdersId = (
    id: string,
    createOrderRequest: BodyType<CreateOrderRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Order>(
      {url: `/api/orders/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: createOrderRequest
    },
      options);
    }
  


export const getPutApiOrdersIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiOrdersId>>, TError,{id: string;data: BodyType<CreateOrderRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiOrdersId>>, TError,{id: string;data: BodyType<CreateOrderRequest>}, TContext> => {

const mutationKey = ['putApiOrdersId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiOrdersId>>, {id: string;data: BodyType<CreateOrderRequest>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiOrdersId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiOrdersIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiOrdersId>>>
    export type PutApiOrdersIdMutationBody = BodyType<CreateOrderRequest>
    export type PutApiOrdersIdMutationError = ErrorType<void>

    /**
 * @summary Update an existing order (Admin only).
 */
export const usePutApiOrdersId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiOrdersId>>, TError,{id: string;data: BodyType<CreateOrderRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiOrdersId>>,
        TError,
        {id: string;data: BodyType<CreateOrderRequest>},
        TContext
      > => {

      const mutationOptions = getPutApiOrdersIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    