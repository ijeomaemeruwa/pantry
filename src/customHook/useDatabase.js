import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

const useDatabase = (collection) => {

    const [docs, setDocs] = useState([])

    // useEffect(() => {
    //   const unsub = db.collection('pantry')
    //   .orderBy('desc')
    //   .onSnapshot((snap) => {
    //     let documents = [];
    //     snap.docs.map(doc => (
    //         documents.push({...doc.data(), id: doc.id })
    //     ));
    //     setDocs(documents);
    //   });

    //   return () => unsub();
    // }, [collection]);

     useEffect(() => {
        const unsubscribe = db.collection('pantry')
        .orderBy('desc')
        .onSnapshot(snapshot => {
        const documents = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
         setDocs(documents)
        });
        return () => {
          console.log('cleanup');
          unsubscribe();
        };
      }, [collection]);

    return { docs }
}

export default useDatabase
