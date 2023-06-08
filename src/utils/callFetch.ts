import { STATUS_CODE } from "@/constants/api";

const LOGIN_URL: string = process.env.NEXT_PUBLIC_LOGIN_URL || "http://localhost/index.php/admin/login_new";

type TFetchResponse = {
  success: boolean;
  data: any;
}

const callFetch = async (
  input: RequestInfo | URL,
  options?: RequestInit | undefined
): Promise<TFetchResponse | void> => {
    const response = await fetch(input, options);
    
    if (!response.ok) {
      if (response.status == STATUS_CODE.UNAUTHORIZED) {
        alert("You are not logged in. You have to login first.");
        window.location.href = LOGIN_URL;
      }
      else {
        const message = `Request failed with status ${response.status}`;
        console.error("[callFetch.ts] ERROR: ", message);
        throw new Error(message);
      }
    }

    // return nothing when DELETE or any NO_CONTENT operation is successful
    if (response.status == STATUS_CODE.NO_CONTENT)
      return;

    // extract json response body
    const data = await response.json();

    return data;
}

export default callFetch;