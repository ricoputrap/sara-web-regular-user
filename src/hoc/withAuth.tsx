/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie, setCookie } from '@/utils/cookie';
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
      const { token, token_expiration } = props;

      if (!!token && typeof(token) == "string") {
        const expired = parseInt(token_expiration as string);

        setCookie("token", token, expired);
        router.replace(router.pathname);
      }

      const isLoggedIn: boolean = checkIsLoggedIn();

      // redirect to login page if user has not logged in
      if (!isLoggedIn) {
        window.location.href = "http://localhost/index.php/admin/login_new"
      }
    }, [props]);

    return <WrappedComponent {...props} />;
  }

  return WithAuth
}

export default withAuth