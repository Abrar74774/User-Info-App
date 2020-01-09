import React from 'react'

const popupStyle = {
    height:'90vh', width:'70vw',
    padding:'10vh 10vw',
    position:'fixed', top:'5vh', left:'15vw', zIndex:'2',
    backgroundColor:'white',
    boxShadow: '40px 30px 40px 20px #00000066'
}
const imageStyle = {
    backgroundImage:"url('user.png')",
    backgroundSize:'cover',
    height:'50%',
    width:'40%',
    backgroundPosition: 'center',
    margin: '0 auto 30px'
}
const close = {
    height:'50px',
    width:'50px',
    fontSize:'50px',
    position:'absolute',
    top:'4vh',
    right:'4vw',
    cursor:'pointer'
}

export default function UserInfo(props) {
    console.log(props.data);
    const { data:d } = props;
    return (
        <div style={popupStyle}>
            <div style={close} onClick={props.close}>&times;</div>
            <h1 style={{textAlign:'center'}}>User Information</h1>
            <div style={imageStyle}></div>
            <p style={{width:'35%', margin:'0 auto',fontSize:'20px'}}>
                Name: {d.name}<br/>
                Username: {d.username}<br/>
                Email: {d.email}<br/>
                Website: {d.website}
            </p>
        </div>
    )
}
