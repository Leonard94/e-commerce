import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

const get = (url: string) => axios.get(url)

export const getAllProducts = async () => {
  const response = await get(`${URL}/products`)
  return response.data
}
