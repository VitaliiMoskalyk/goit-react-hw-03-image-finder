import axios from "axios";

function getData(name, page) {
  const API = `https://pixabay.com/api/?q=${name}&page=${page}&key=24190237-c75eaa2cb0fd0521e8d3d1887&image_type=photo&orientation=horizontal&per_page=12`;
  return axios(API).then((response) => {
    if (response) {
      return response.data;
    }
  });
}
const api = { getData };
export default api;
