import React, {useState} from 'react'
import ProgressBar from '../../features/ProgressBar/ProgressBar'

const UploadImage = () => {
    const [ file, setFile ] = useState(null);
    const [error, setError] = useState(null);
  
    //Create an array of accepted file types
    const fileTypes = ['image/png', 'image/jpg'];
  
  
    const handleFileChange = (e) => {
      let selected = e.target.files[0]
  
      //Check if the a file was selected and if it matches the files in the fileTypes array
      if(selected && fileTypes.includes(selected.type)){ 
        setFile(selected);
        setError('');
      }else{
        setFile(null);
        setError('Please select a valid file type .png or .jpg')
      }
  }
  
    return (
    <>
    <label>
    <input type="file" onChange={handleFileChange}/>
    </label>
     <div className="output">
      {error && <small className="error">{error}</small>}
      {file && <span className="file_name">{file}</span>}
      {file && <ProgressBar file={file} setFile={setFile} /> }
     </div>      
    </>
    )
}

export default UploadImage
