const baseUrl = import.meta.env.VITE_URL
const apiKey = import.meta.env.VITE_API_KEY
const apiHost = import.meta.env.VITE_API_HOST

export const options = {
    method: 'GET',
    url: baseUrl,
    params: {
        url: '',
        length: '3'
    },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    }
}
