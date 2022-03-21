import axios from "axios";

export default axios.create({
  baseURL: "https://ecommerce-api-gamma.vercel.app/api/ecommerce",
});
