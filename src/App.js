import React from 'react';
import './style.css';
// descomentar el "import" (no funciona en stackblitz)
import dataToFirebase from './jsonToFirestore';

export default function App() {
  return (
    <div>
      <h1>JSON to Firestore</h1>
      <hr />
      <h3> Modificar en jsonToFirestore.js:</h3>
      <div>
        {' '}
        <b>1-</b> const newItem = doc(collection(db, 'cities'));{' '}
      </div>
      <p>
        Ahi donde dice "cities" es el nombre del documentos. Modificar por
        ejemplo a "products"
      </p>

      <div>
        {' '}
        <b>2-</b>const PRODUC2TS = [.....{' '}
      </div>
      <p>Aca van todos nuestros productos</p>

      <div>
        {' '}
        <b>3-</b>const firebaseConfig ={' '}
      </div>
      <p>Aca van nuestras claves de firebase</p>
      <div>
        {' '}
        <b>4-</b>Descomentamos las lineas 14 a 24{' '}
      </div>
      <hr />
      <h2>Una vez modificado presionar:</h2>

      <button onClick={dataToFirebase}>Subir datos</button>
    </div>
  );
}
