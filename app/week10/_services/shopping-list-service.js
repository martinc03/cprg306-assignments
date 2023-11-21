import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    
    try {
      const userItemsRef = collection(db, `users/${userId}/items`);
      const querySnapshot = await getDocs(userItemsRef);
      
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          data: doc.data()
        });
      });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
    
    return items;
  }
  
  export async function addItem(userId, item) {
    try {
      const userItemsRef = collection(db, `users/${userId}/items`);
      const docRef = await addDoc(userItemsRef, item);
      return docRef.id;
    } catch (error) {
      console.error('Error adding item:', error);
      return null;
    }
  }