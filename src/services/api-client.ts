import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "413dda13fb704060832e606fe084f044",
  },
});
