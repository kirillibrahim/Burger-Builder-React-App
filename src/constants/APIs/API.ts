import axios from "axios";

//export const baseUrl = process.env.REACT_APP_baseUrl;

let baseUrl = "https://xm-crm-react-exercise-server.herokuapp.com";

export default axios.create({
  baseURL: baseUrl
});
