export const BASE_URL = 'https://api.github.com/'

export const baseAxios = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}