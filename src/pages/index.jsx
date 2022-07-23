import React, { useEffect, useState } from 'react';

const Index = () => {

  const [user, setUser] = useState([])
  useEffect(() => {
    const getUser = async () => {
      await fetch('http://localhost:3000/api/')
        .then((response) => response.json())
        .then((response) => { setUser(response) })
    }
    getUser()
  }, []);


  return (
    <div className='row'>
      {
        user.map((user, i) => (
          <div className='col' key={i}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Index;
