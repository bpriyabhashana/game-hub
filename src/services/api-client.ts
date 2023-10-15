import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9cbbf1a99d2648b0b13b3f8501c08d31",
  },
});
