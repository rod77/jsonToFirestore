import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  addDoc,
} from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: 'x',
//   authDomain: 'y',
//   projectId: 'y',
//   storageBucket: 'x',
//   messagingSenderId: 'x',
//   appId: 'x',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

//PRODUCTS contiene todos nuestros items a publicar en nuestra colección de Firestore
const PRODUCTS = [
  {
    id: 1,
    city: 'Pombal',
    country: 'Brazil',
    stock: 170,
    price: 3939,
    imageUrl: 'https://picsum.photos/seed/Pombal/360/360',
  },
  {
    id: 2,
    city: 'Solnechnoye',
    country: 'Russia',
    stock: 144,
    price: 4068,
    imageUrl: 'https://picsum.photos/seed/Solnechnoye/360/360',
  },
  {
    id: 5,
    city: 'Jucás',
    country: 'Brazil',
    stock: 61,
    price: 5549,
    imageUrl: 'https://picsum.photos/seed/Jucás/360/360',
  },
  {
    id: 6,
    city: 'Nortelândia',
    country: 'Brazil',
    stock: 30,
    price: 5620,
    imageUrl: 'https://picsum.photos/seed/Nortelândia/360/360',
  },
];

async function dataToFirebase() {
  PRODUCTS.forEach((item) => {
    // remplazar "cities" por el nombre de la coleccion
    const newItem = doc(collection(db, 'cities'));

    setDoc(newItem, item)
      .then(() => {
        console.log('Document written with ID: ', newItem.id);
      })
      .catch((err) => {
        console.error('Error adding document: ', err);
      });
  });
}

export default dataToFirebase;
