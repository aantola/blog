import { useEffect, useState } from 'react';

export interface useLoadScriptTag {
    /**
     * src for the script to load
     */
    src: string;

    /**
     * Callback fires on success
     */
    onSuccess: () => void;
    /**
     * Callback fires on error
     */
    onError: (e : Event | string) => void;
  }

export default function useLoadScriptTag(options : useLoadScriptTag) : boolean {
    const { src, onSuccess, onError } = options;

    const [success, setSuccess ] = useState(false);

    

    useEffect(() => {

        const scriptTag = document.createElement('script');
        scriptTag.src = src;
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.onload = () => {
            setSuccess(true)
            onSuccess();           
        }
        scriptTag.onerror = (e : Event | string ) => {
            onError(e);
        }


        document.body.appendChild(scriptTag)

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])

    return success;

}