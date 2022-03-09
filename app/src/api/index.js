/* import axios from "axios";

//connects axios with the back(local-host)
export default axios.create({baseURL:"http://localhost:27017"}); */

import axios from "axios";
// create an instance of axios to get data from api without writing full URL
export default axios.create({
  baseURL: "https://todolistfloresdeltambo.herokuapp.com",
});