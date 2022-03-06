import axios from "axios";

//connects axios with the back(local-host)
export default axios.create({baseURL:"http://localhost:27017"});
