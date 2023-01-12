import axios from "axios"

export const getPostsAPI = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data
  } catch (error) {
    return error
  }
}
