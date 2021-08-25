import axios from 'axios';
const KEY= 'AIzaSyASCNZ02ijWSdw_TNPHAtH1C9dnhofZnQA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})