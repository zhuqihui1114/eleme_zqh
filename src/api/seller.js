import axios from 'axios'

export function getSellerApi() {
  const url = '/api/seller'

  return axios.get(url, {}).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getGoodsApi() {
  const url = '/api/goods'

  return axios.get(url, {}).then((res) => {
    return Promise.resolve(res.data)
  })
}
