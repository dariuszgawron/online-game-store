// import react from 'react';

const Users = ({users}) => {
    return (
        <div>
            <center><h1>Contact list</h1></center>
            {
                users.map((user)=> (
                    <div className="card" key={user.name}>
                        <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <h6 className="card-subtitle">{user.email}</h6>
                        <p className="card-text">{user.company.catchPhrase}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;