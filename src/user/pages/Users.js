import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Sayon Guilavogui',
            image: 'https://saguishop.com/assets/images/sg-443x472.png',
            places: 3,
        }
    ]
    return (
        <UsersList items={USERS} />
    )
}

export default Users
