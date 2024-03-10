import axios from "axios"
const url="https://jsonplaceholder.typicode.com/users"

export const fetchData= async()=>{
    try {
        return axios.get(url)
        
    } catch (error) {
        console.log("The error While Fcthing Data is", error.message)
    }
}
export const PostData= async(data)=>{
try {
    return axios.post(url, data)
} catch (error) {
    console.log("The error While Posting Data is", error.message)
}
}