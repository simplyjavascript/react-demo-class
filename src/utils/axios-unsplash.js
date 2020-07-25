import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});
instance.defaults.headers.common["Authorization"] =
  "Client-ID ulHAWzYRp8HBs6BSkPRUrcypqVt_dnEzwTDcj9yY7o0";
export default instance;
