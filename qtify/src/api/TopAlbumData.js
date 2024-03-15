import axios from 'axios'

export default async function TopAlbumData(){
    const api = "https://qtify-backend-labs.crio.do/albums/top"

    const response = await axios.get(api)
    const data = await response.data
    return data
}