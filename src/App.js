import React, { useState, useEffect } from 'react';
import User from './components/User';
import UserInfo from './components/UserInfo'

 const container = {
  width:'90vw',
  height:' 96vh',
  boxShadow: '4px 4px 12px rgba(0,0,0,0.4)',
  backgroundColor: 'white',
  margin:'50px auto',
  padding:'10px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'center'
}




function App() {

  const [userData, setUserData] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [userIndex, setUserIndex] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then(res => res.json())
    .then(data => setUserData(data));
  },[setUserData]);

  console.log(userData);
  console.log(showPopup);

  const showInfo = (id) => {
    setShowPopup(true);
    setUserIndex(id);
  }

  if (userData !== '') {
    return (
      <React.Fragment>
        <div style={container}>
        {userData.map(data => {
        return (
          <User key={data.id} id={userData.indexOf(data)} passData={data} getInfo={showInfo} />
        );
      })}              
      </div> 
      {showPopup ? <UserInfo data={userData[userIndex]} close={() => setShowPopup(false)} /> : null}  
      </React.Fragment>
             
    );
  } else {
    return (
      <div style={container}>Please wait...</div>
    )  
  }
}

export default App;
