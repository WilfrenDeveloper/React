import React from 'react'

const UserCard = ({ user }) => {



  return (
    <article>
        <img src={user.picture.large} alt="" />
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <ul>
            <li className="usercard__li">
                <span className="usercard__label">Email: </span><span className="usercard__value">{user.email}</span>
            </li>
            <li className="usercard__li">
                <span className="usercard__label">Gender: </span><span className="usercard__value">{user.gender}</span>
            </li>
        </ul>
    </article>
    
  )
}

export default UserCard