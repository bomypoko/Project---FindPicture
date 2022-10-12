import React ,{ createContext , useState} from 'react'
import axios from 'axios'
import { apiKey } from '../api/config'

export const PhotoContext = createContext()

const PhotoContextProvider = (props) => {

    const [images , setImages] = useState([])
    const [loading , setLoading] = useState(true)

    const runSearch = query => {
        axios
            .get(
                `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}&per_page=20`
             )
             .then(response => {
                setImages(response.data.results)
                setLoading(false)
                // console.log(response.data)
                
             })
             .catch(error => {
                 console.log("Error - Cannot Fetching and Parsing Data" , error
                 )
             })
    }

  return (
    <PhotoContext.Provider value={{images ,loading ,runSearch }}>
        {props.children}
    </PhotoContext.Provider>
  )
}

export default PhotoContextProvider