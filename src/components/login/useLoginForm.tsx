import useLoading from '@/hooks/useLoading';
import { setCookie } from '@/utils/cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const useLoginForm = () => {
  const { setLoading } = useLoading();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const HOST: string = process.env.NEXT_PUBLIC_API || "http://localhost/index.php";
      const URL: string = HOST + "/auth/login";

      const formData = new FormData();
      formData.append("u_email", email);
      formData.append("u_password", password);

      const response = await fetch(URL, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      // login failed
      if (!data.success)
        throw new Error(data.msg);

      // login success
      const { token, token_expiration } = data.data;
      setCookie("token", token, token_expiration);
      router.replace("/");

      setLoading(false);
    }
    catch (err: any) {
      const errorMessage = err.message || "Login failed";
      console.error("LOGIN ERROR: ", errorMessage);
      alert(errorMessage);
      setLoading(false);
    }
  }

  return {
    email, password,
    handleEmailChange, handlePasswordChange,
    handleSubmit
  }
}

export default useLoginForm