import React from 'react'
import './UsersList.css'
import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <Card className="center">
                <h2>No users found</h2>
            </Card>

        )
    }
    return (
        <div className="center">
            <ul className='users-list'>
                {props.items.map(user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />
                ))}
            </ul>
        </div>

    )
}

export default UsersList
