import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

export async function addToWatchlist(userId, movie) {
  await addDoc(
    collection(db, 'watchlists'),
    {
      userId,
      movieId: movie.id,
      title: movie.title,
      posterUrl: movie.posterUrl,
      genres: movie.genres,
      rating: movie.rating,
      year: movie.year,
      addedAt: serverTimestamp(),
    }
  );
}

export async function removeFromWatchlist(userId, movieId) {
  try {

    console.log(userId, movieId);

    // 1. create a reference to the watchlists collection
    const watchlistsRef = collection(db, 'watchlists');
    const q = query(
      watchlistsRef, 
      where('userId', '==', userId), 
      // change movieId to int64
      where('movieId', '==', movieId)
    );

    // 2. get the document that matches the query
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    // 3. delete the document
    querySnapshot.forEach(async (document) => {
      const docRef = doc(db, 'watchlists', document.id);
      await deleteDoc(docRef);
      console.log(`Document whith ID ${document.id} successfully deleted!`);
    });

  } catch (error) {
    console.error(error);
  }
}

export function useWatchlist(userId) {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!userId) {
      return;
    }

    // 1. create a reference to the watchlists collection
    const watchlistsRef = collection(db, 'watchlists');
    const q = query(watchlistsRef, where('userId', '==', userId));

    // 2. get the documents that match the query
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setItems(results.map((result) => ({
        key: result.movieId,
        id: result.movieId,
        title: result.title,
        genres: result.genres,
        rating: result.rating,
        year: result.year,
        posterUrl: result.posterUrl
      })));

    })

    return () => unsubscribe();

  }, [userId])

  return items
} 
