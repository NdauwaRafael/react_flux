/**
 * Created by Raphael Karanja on 2018-12-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {


    render() {
        const {name, value, label, error, onChange} = this.props;
        let validatorClass = '';
        if (error.length > 0) {
            validatorClass = 'is-invalid'
        }else{
            validatorClass= 'is-valid'
        }

        return (
            <div className="form-group ">
                <label htmlFor={name}>{label}</label>
                <input type="text"
                       value={value}
                       name={name}
                       onChange={onChange}
                       className={"form-control " + validatorClass}
                       ref={name}
                       placeholder={label}/>
                <small className="form-text invalid-feedback">{error}</small>
            </div>
        );

    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired

};

TextInput.defaultProps = {
    error: '',
    value: ''
};
export default TextInput;