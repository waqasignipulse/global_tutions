const baseUrl = "http://localhost:3001";


const APIS = {
    // categories
    get_enabled_categories: `${baseUrl}/categories/enabled`,


    // courses
    get_enabled_courses: `${baseUrl}/courses/enabled`,
    get_enabled_popular_courses: `${baseUrl}/courses/enabled/popular`

}

export default APIS;