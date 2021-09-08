import axios from 'axios'

const httpClient = (args: any): any => {
  return axios.create({
    ...args,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default httpClient
