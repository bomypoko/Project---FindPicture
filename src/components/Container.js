import React , {useContext , useEffect} from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Gallery from './Gallery'


 

const Container = ( { SearchTerm } ) => {

    const {images , loading , runSearch} = useContext(PhotoContext)
    useEffect(() => {
        runSearch(SearchTerm)
    },[SearchTerm])

  return (

    <div className='photo-container'>

        <Gallery data={images} />

    
    </div>
  )
}

export default Container