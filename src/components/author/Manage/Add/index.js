import React from 'react';
import TextInput from '../../../Common/TextInput'

export default ({author, onChange, onSave}) =>

    <div className="page_body">
        <form>
            <TextInput name="firstname" label="First Name" onChange={onChange} value={author.firstname}/>
            <TextInput name="lastname" label="Last Name" onChange={onChange} value={author.lastname}/>
            <TextInput name="email" label="Email" onChange={onChange} value={author.email}/>
            <button type="submit" onClick={onSave} className="btn btn-primary">Submit</button>
        </form>
    </div>