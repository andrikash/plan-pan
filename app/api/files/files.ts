/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation
} from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryClient,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query';

import type {
  PostApiFilesGet200,
  PostApiFilesGet400,
  PostApiFilesGet500,
  PostApiFilesGetBody
} from '../../types/api';

import { customInstance } from '.././mutator/custom-instance';
import type { ErrorType , BodyType } from '.././mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * @summary Generate a pre-signed URL for file download.
 */
export const postApiFilesGet = (
    postApiFilesGetBody: BodyType<PostApiFilesGetBody>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<PostApiFilesGet200>(
      {url: `/api/files/get`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postApiFilesGetBody, signal
    },
      options);
    }
  


export const getPostApiFilesGetMutationOptions = <TError = ErrorType<PostApiFilesGet400 | PostApiFilesGet500>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiFilesGet>>, TError,{data: BodyType<PostApiFilesGetBody>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiFilesGet>>, TError,{data: BodyType<PostApiFilesGetBody>}, TContext> => {

const mutationKey = ['postApiFilesGet'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiFilesGet>>, {data: BodyType<PostApiFilesGetBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiFilesGet(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiFilesGetMutationResult = NonNullable<Awaited<ReturnType<typeof postApiFilesGet>>>
    export type PostApiFilesGetMutationBody = BodyType<PostApiFilesGetBody>
    export type PostApiFilesGetMutationError = ErrorType<PostApiFilesGet400 | PostApiFilesGet500>

    /**
 * @summary Generate a pre-signed URL for file download.
 */
export const usePostApiFilesGet = <TError = ErrorType<PostApiFilesGet400 | PostApiFilesGet500>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiFilesGet>>, TError,{data: BodyType<PostApiFilesGetBody>}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiFilesGet>>,
        TError,
        {data: BodyType<PostApiFilesGetBody>},
        TContext
      > => {

      const mutationOptions = getPostApiFilesGetMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    