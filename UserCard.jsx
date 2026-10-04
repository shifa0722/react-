import React from 'react'

const UserCard = (props) => {
  return (
    <div className= 'user-card'>
        <p id="username"> {props.name}</p>
        <img id="user-image" src="https://www.shutterstock.com/image-photo/portrait-relax-selfie-woman-home-260nw-2755910041.jpg" alt="User Image"></img>
        <p id="user-bio"> {props.bio}</p>
      
    </div>
  )
}

export default UserCard
