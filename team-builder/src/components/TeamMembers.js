import React from 'react';

export default function TeamMembers(props){
    const { details } = props

    if(!details) {
        return <h3>Working fetching member&apos;s details...</h3>
    }

    return (
        <div className='container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}