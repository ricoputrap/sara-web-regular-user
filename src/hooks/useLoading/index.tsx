import React from 'react'
import useLoadingStore from './store'

const useLoading = () => {
  const isLoading = useLoadingStore(state => state.isLoading);
  const setLoading = useLoadingStore(state => state.setLoading);

  return { isLoading, setLoading }
}

export default useLoading