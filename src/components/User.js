import React from 'react'
//======================  STYLING  =============================
const userStyle = {
    boxShadow:'4px 4px 12px #00000055',
    height:'400px',
    width:'250px',
    margin:'20px',
    transition: 'transform .3s',
    cursor:'pointer'
}

const imageStyle = {
    backgroundImage:"url('user.png')",
    backgroundSize:'cover',
    height:'60%',
    width:'100%'
}
const contentStyle = {
    padding:'20px'
}
//===============================================================

export default function User(props) {

    const showInfo = (id) => {
        props.getInfo(id);
    }
    
    return (
        <div style={userStyle} className="user" onClick={() => showInfo(props.id)} >
            <div style={imageStyle}></div>
            <div style={contentStyle}>
                <h3>{props.passData.name}</h3>
                <h4 style={{fontWeight:'300',color:'#666'}}>{props.passData.username}</h4>
            </div>
        </div>
    )
}
