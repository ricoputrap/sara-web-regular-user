/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie } from '@/utils/cookie';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const checkIsLoggedIn = (): boolean => {
  const token: string | undefined = getCookie("token");
  return !!token;
}

interface Props {
  [key: string]: any;
}

const withAuth = <P extends Props>(WrappedComponent: React.FC<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();
    
    
    useEffect(() => {
      const isLoggedIn: boolean = checkIsLoggedIn();

      // redirect to login page if user has not logged in
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  }

  return WithAuth
}

export default withAuth