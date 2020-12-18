import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>to do list</h1>
            <h2>{allPosts} records, liked of them {liked}</h2>
        </div>
    )
}
export default AppHeader;