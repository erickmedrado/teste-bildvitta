import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://static-content.bivilabs.com.br/',
  headers: {
    Authorization: 'Bearer {token}'
  }
})
