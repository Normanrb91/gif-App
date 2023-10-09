export const getGifs = async(category) => {
  
    const base_url = 'https://api.giphy.com/v1/gifs/search?'
    const api_key = 'sKW8PATDaFT4HaZuRgyAcnVOtUzATuD2'
    const limit = 10

    const url = `${base_url}api_key=${api_key}&q=${category}&limit=${limit}`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })

    return gifs
}