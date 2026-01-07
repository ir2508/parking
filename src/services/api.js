import axios from "axios"

const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/ir2508/parking/db",
})

export default api
