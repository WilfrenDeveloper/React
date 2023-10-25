import React from 'react'

const UserCard = ({user}) => {


  return (
    <div>
        <img src={user?.results[0].picture.large} alt="" />
        <h2>{user?.results[0].name.title + ` ${user?.results[0].name.first}` + ` ${user?.results[0].name.last}`}</h2>
        <h3>{user?.results[0].email}</h3>
        <h3>{user?.results[0].gender}</h3>
        <h3>{user?.results[0].location.country}</h3>
    </div>
  )
}


export default UserCard