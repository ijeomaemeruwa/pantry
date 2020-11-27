import { useState, useEffect } from 'react'
import { storage, db } from '../firebase/config'

const useStorage = (file) => {
    const [ url, setUrl ] = useState(null);
    const [ progress, setProgress ] = useState(0);
    const [ error, setError ] = useState(null);

    useEffect(() => {
       //Reference to where the file should be saved
       const storageRef = storage.ref(file.name);
       const databaseRef = db.collection('pantry');


       storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
       }, (error) => {
           setError(error);

        //function that fires when upload is complete and converts the image to a url
       }, async () => {
           const url = await storageRef.getDownloadURL();
           databaseRef.add({ url })
           setUrl(url);
       }) 
    }, [file]);

    return { url, progress, error }
}

export default useStorage;