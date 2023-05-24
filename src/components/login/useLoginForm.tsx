import { setCookie } from '@/utils/cookie';
import React, { useState } from 'react'

const useLoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
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

      if (!!data.data.token) {
        setCookie("token", data.data.token, data.data.token_expiration);
        window.location.href = "/";
      }
      else {
        const message = data.msg || "Login failed";
        alert(message);
      }
      setIsLoading(false);
    }
    catch (err: any) {
      console.error("LOGIN ERROR: ", err);
      setIsLoading(false);
    }
  }

  return {
    email, password, isLoading,
    handleEmailChange, handlePasswordChange,
    handleSubmit
  }
}

export default useLoginForm