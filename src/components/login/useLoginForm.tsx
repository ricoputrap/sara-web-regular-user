import { setCookie } from '@/utils/cookie';
import React, { useState } from 'react'

const useLoginForm = () => {
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
      const HOST: string = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
      const URL: string = HOST + "/api/login";

      const formData = new FormData();
      formData.append("u_email", email);
      formData.append("u_password", password);

      const response = await fetch(URL, {
        method: "POST",
        body: formData
      });
      const { token, token_expiration } = await response.json();
      setCookie("token", token, token_expiration);

      window.location.href = "/";
    }
    catch (err: any) {
      console.error("LOGIN ERROR: ", err);
    }
  }

  return {
    email, password,
    handleEmailChange, handlePasswordChange,
    handleSubmit
  }
}

export default useLoginForm