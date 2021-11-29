import { useEffect } from 'react'
import Router from 'next/router'

type Options = { onStart: () => void; onComplete?: () => void; onError?: () => void }

export const useRouteChangeEffect = ({ onStart, onComplete, onError }: Options): void => {
  useEffect(() => {
    onStart && Router.events.on('routeChangeStart', onStart)
    onComplete && Router.events.on('routeChangeComplete', onComplete)
    onError && Router.events.on('routeChangeError', onError)
    return () => {
      onStart && Router.events.off('routeChangeStart', onStart)
      onComplete && Router.events.off('routeChangeComplete', onComplete)
      onError && Router.events.off('routeChangeError', onError)
    }
  }, [onStart, onComplete, onError])
}
