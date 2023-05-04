import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Cameras = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    const productsRef = firebase.database().ref('Products');
    const camerasRef = productsRef.orderByChild('category').equalTo('Cameras');
    camerasRef.on('value', (snapshot) => {
      const camerasData = [];
      snapshot.forEach((childSnapshot) => {
        const camera = childSnapshot.val();
        camerasData.push(camera);
      });
      setCameras(camerasData);
    });
    return () => {
      camerasRef.off();
    };
  }, []);

  return (
    <div>
      <h2>Cameras</h2>
      <ul>
        {cameras.map((camera) => (
          <li key={camera.id}>
            <h3>{camera.name}</h3>
            <p>{camera.description}</p>
            <p>Price: ${camera.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cameras;
