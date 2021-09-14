import React from 'react';

function Form(props) {

    const { values, update, submit } = props

    const onChange = evn => {
        const name = evn.target.name;
        const value = evn.target.value;
        update(name, value);
    }
    const onSubmit = evn => {
        evn.preventDefault();
        console.log('Submitting')
        submit();
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>username
                    <input
                        type='text'
                        name='username'
                        placeholder='type your username here'
                        onChange={onChange}
                        value={values.username}
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        placeholder='type your email here'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>--Select a role--</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Project Lead'>Project Lead</option>
                        <option value='Intern'>Intern</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;