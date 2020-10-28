import React, { Component } from 'react'
import UserItem from "./UserItem"
import Spinner from "../layout/Spinner.jsx"
import PropTypes from "prop-types";

const Users = ({users, loading}) => {
        if(loading) {
            return <Spinner />
        } else {

        return (
            <div style={userStyle}>
                {/* we are mapping over the props.users to create our UserItem */}
                {/* which is mapped through to UserItem */}
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle ={
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}

export default Users
