import { useCallback } from 'react';

export function useErrorHandler() {
    return useCallback((error: Error) => {
        if (error) {
        }
    }, []);
}
