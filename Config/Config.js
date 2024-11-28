import axios from "axios";

const baseUrl = "http://localhost:3001";



// get enabled categories
const get_enabled_categories = async ()=>{
    try {
        const response = await axios.get(`${baseUrl}/categories/enabled`, {params: {order:1}});
        if(response.statusText === "OK"){
            return response.data;
        }
    } catch (error) {
        return error
    }
}
// get enabled courses
const get_enabled_courses = async ()=>{
    try {
        const response = await axios.get(`${baseUrl}/courses/enabled`, {params: {order:1}});
        if(response.statusText === "OK"){
            return response.data;
        }
    } catch (error) {
        return error
    }
}
// get enabled popular courses
const get_enabled_popular_courses = async ()=>{
    try {
        const response = await axios.get(`${baseUrl}/courses/enabled/popular`, {params: {order:1}});
        if(response.statusText === "OK"){
            return response.data;
        }
    } catch (error) {
        return error
    }
}

const APIS = {
    // categories
    get_enabled_categories,

    // courses
    get_enabled_courses,
    get_enabled_popular_courses

}

export default APIS;