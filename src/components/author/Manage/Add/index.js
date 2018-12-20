import React from 'react';
import TextInput from '../../../Common/TextInput';
import PropTypes from 'prop-types';

const Add = ({author, onChange, onSave, errors}) => {
    return (
        <div className="page_body">
            <form>
                <TextInput name="firstname" label="First Name" onChange={onChange} value={author.firstname} error={errors.firstname}/>
                <TextInput name="lastname" label="Last Name" onChange={onChange} value={author.lastname} error={errors.lastname}/>
                <TextInput name="email" label="Email" onChange={onChange} value={author.email} error={errors.email}/>
                <button type="submit" onClick={onSave} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};
Add.prototype = {
    author: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
export default Add;