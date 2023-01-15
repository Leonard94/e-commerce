import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// const get = (url: string) => axios.get(url)

// export const getAllProducts = async () => {
//   const response = await get(`${URL}/products`)
//   return response.data
// }
