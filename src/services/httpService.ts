import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.staus >= 400 &&
    error.status.response.status < 500;

  if (!expectedError) {
    console.log(error);
    toast.error("Oops! Failed to sent. Please try again.", {
      icon: false,
    });
  }

  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { post: axios.post };
