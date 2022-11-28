import { AxiosInstance } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLoadingProgressBar } from './use-loading-progressBar.hook';

export type axios = {
    handlePostRequest: (
        axiosInstance: AxiosInstance,
        url: string,
        requestConfig: Record<string, unknown> | FormData
    ) => Promise<any>;
    handleGetRequest: (axiosInstance: AxiosInstance, url: string) => Promise<any>;
    handlePutRequest: (
        axiosInstance: AxiosInstance,
        url: string,
        requestConfig: Record<string, unknown>
    ) => Promise<any>;
    handleDeleteRequest: (
        axiosInstance: AxiosInstance,
        url: string,
        requestConfig: Record<string, unknown>
    ) => Promise<any>;
};
export function useAxios(): axios {
    const [controller, setController] = useState<AbortController>();
    const { showLoadingBar, hideLoadingBar } = useLoadingProgressBar();

    useEffect(() => () => controller?.abort(), [controller]);
    return {
        handlePostRequest: useCallback(
            async (axiosInstance, url, requestConfig): Promise<any> => {
                let result: Promise<any> = Promise.reject();
                showLoadingBar();
                const ctrl = new AbortController();
                setController(ctrl);
                await axiosInstance
                    .post(url, requestConfig)
                    .then((res) => {
                        result = Promise.resolve(res.data);
                    })
                    .catch((err) => {
                        result = Promise.reject(err.response.data.errors);
                    })
                    .finally(() => hideLoadingBar());
                return result;

                //       try {
                //           const ctrl = new AbortController();
                //           setController(ctrl);
                //           const res = await axiosInstance.post(url,
                //                      { ...requestConfig, signal: controller?.signal });
                //           return Promise.resolve(res.data);
                //       } catch (err: any) {
                //           // if (err.response.data.errors) {
                //           //     Object.keys(err.response.data.errors).forEach((key, index) => {
                //           //         errorToast(Object.keys(err.response.data.errors)[index],
                //            err.response.data.errors[key]);
                //           //     });
                //           // }
                //           // setError(err.response.data.errors);
                //           return Promise.reject(err.response.data.errors);
                //       } finally {
                //           hideLoadingBar();
                //       }
            },
            [hideLoadingBar, showLoadingBar]
        ),
        handleGetRequest: useCallback(
            async (axiosInstance, url) => {
                let result: Promise<any> = Promise.reject();
                showLoadingBar();
                const ctrl = new AbortController();
                setController(ctrl);
                await axiosInstance
                    .get(url, { signal: controller?.signal })
                    .then((res) => {
                        result = Promise.resolve(res.data);
                    })
                    .catch((err) => {
                        result = Promise.reject(err.response.data.errors);
                    })
                    .finally(() => hideLoadingBar());
                return result;
                // showLoadingBar();
                // try {
                //     const ctrl = new AbortController();
                //     setController(ctrl);
                //     const res = await axiosInstance.get(url, {
                //         signal: controller?.signal,
                //     });
                // } catch (err: any) {
                // } finally {
                //     hideLoadingBar();
                // }
            },
            [controller?.signal, hideLoadingBar, showLoadingBar]
        ),
        handlePutRequest: useCallback(
            async (axiosInstance, url, requestConfig) => {
                let result: Promise<any> = Promise.reject();
                showLoadingBar();
                const ctrl = new AbortController();
                setController(ctrl);
                await axiosInstance
                    .put(url, { ...requestConfig, signal: controller?.signal })
                    .then((res) => {
                        result = Promise.resolve(res.data);
                    })
                    .catch((err) => {
                        result = Promise.reject(err.response.data.errors);
                    })
                    .finally(() => hideLoadingBar());
                return result;
                // showLoadingBar();
                // try {
                //     const ctrl = new AbortController();
                //     setController(ctrl);
                //     const res = await axiosInstance.put(url, {
                //         requestConfig,
                //         signal: controller?.signal,
                //     });
                // } catch (err: any) {
                // } finally {
                //     hideLoadingBar();
                // }
            },
            [controller?.signal, hideLoadingBar, showLoadingBar]
        ),
        handleDeleteRequest: useCallback(
            async (axiosInstance, url, requestConfig) => {
                let result: Promise<any> = Promise.reject();
                showLoadingBar();
                const ctrl = new AbortController();
                setController(ctrl);
                await axiosInstance
                    .delete(url, { ...requestConfig, signal: controller?.signal })
                    .then((res) => {
                        result = Promise.resolve(res.data);
                    })
                    .catch((err) => {
                        result = Promise.reject(err.response.data.errors);
                    })
                    .finally(() => hideLoadingBar());
                return result;
                // showLoadingBar();
                // try {
                //     const ctrl = new AbortController();
                //     setController(ctrl);
                //     const res = await axiosInstance.delete(url, {
                //         signal: controller?.signal,
                //     });
                // } catch (err: any) {
                // } finally {
                //     hideLoadingBar();
                // }
            },
            [controller?.signal, hideLoadingBar, showLoadingBar]
        ),
    };
}
