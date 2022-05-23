import React from 'react';

const UsersList = ({users, selectUser, removeUser}) => {
    return (
        <div className='card'>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h3 className='card-header'>{user.first_name} {user.last_name}</h3>
                        <p><b>email: </b>{user.email}</p>
                        <p><b>birthday: </b>{user.birthday}</p>
                        <button onClick={()=> selectUser(user)} className='btn btn-outline-primary'>
                            Edit
                        </button>
                        <button onClick={()=> removeUser(user.id)} className='btn btn-outline-danger'>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;