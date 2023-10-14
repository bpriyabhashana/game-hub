import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3911b62cca6f45169b537f50c7aee00a",
  },
});
