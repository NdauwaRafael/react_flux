import React from 'react';
import TextInput from '../../../Common/TextInput'

export default ({author, onChange}) =>

    <div className="page_body">
        <form>
            <TextInput name="firstname" label="First Name" onChange={onChange} value={author.firstname}/>
            <TextInput name="lastname" label="Email" onChange={onChange} value={author.lastname}/>
            <TextInput name="email" label="First Name" onChange={onChange} value={author.email}/>
            <button type="button" className="btn btn-primary">Submit</button>
        </form>
    </div>