import { useState } from "react";
import instance from "../../src/api/api";

const UseRestaurant = () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: false,
  });

  const useRestaurant = async (term = "recommended") => {
    setResult({ data: null, loading: true, error: false });
    try {
      const { data } = await instance.get("/?category=" + term);
      setResult({ data, loading: false, error: false });
    } catch (error) {
      setResult({ data: null, loading: false, error: true });
    }
  };

  return [result, useRestaurant];
};

export default UseRestaurant;
