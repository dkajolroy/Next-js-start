import React, { useEffect, useState } from 'react';

const Index = () => {

  const [user, setUser] = useState([])
  useEffect(() => {
    const getUser = async () => {
      await fetch('http://localhost:3000/api/user')
        .then((response) => response.json())
        .then((response) => { setUser(response) })
    }
    getUser()
  }, []);


  return (
    <div className='row'>
      {
        user.map((user) => (
          <div className='col' key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Index;
