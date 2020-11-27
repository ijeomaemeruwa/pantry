import React, {useEffect} from 'react'
import useStorage from '../../customHook/useStorage'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
       if(url){
        setFile(null)
       }
    }, [url, setFile])
    
    return (
    <>
     <span className="progress_bar" style={{ width: progress}}></span>       
    </>
    )
}

export default ProgressBar
