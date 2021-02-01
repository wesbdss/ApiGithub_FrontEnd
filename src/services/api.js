const requestUrl = process.env.REACT_APP_REQUEST_URL || 'https://backendfullstackapi.herokuapp.com/'
// const requestUrl = process.env.REACT_APP_REQUEST_URL || 'http://localhost:4000/'

const api = async (method, path,url=false) => {

    const response = await fetch(url ? path : (requestUrl + path), {
        method,
    })

    if (!response.ok) {
        throw Error(response.statusText)
    }
    const jsonResponse = await response.json()
    return jsonResponse
}

export default api