import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f51a37ba03ba409299dd44fa77de7e5c",
  },
});
