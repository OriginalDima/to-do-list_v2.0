import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className='bottom-panel d-flex'>
            <input
                className='form-control new-post-label'
                type='text'
                placeholder='add target'
            />
            <button
                className='btn btn-outline-secondary'
                type='submit'
                onClick={() => onAdd('hi pidor')}>
            Add</button>
        </div>
    )
}

export default PostAddForm;