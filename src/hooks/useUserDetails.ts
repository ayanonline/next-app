import axios from "axios";
import { useEffect, useState } from "react";

const useUserDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
        withCredentials: true,
      });
      // console.log(response.data);
      setData(response.data);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error };
};

export default useUserDetails;
