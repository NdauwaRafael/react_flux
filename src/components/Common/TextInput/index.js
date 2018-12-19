/**
 * Created by Raphael Karanja on 2018-12-19.
 */
import React from 'react';

export default ({name, value, label, error, onChange}) =>
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type="text"
               value={value}
               name={name}
               onChange={onChange}
               className="form-control"
               ref={name}
               placeholder={'Input ' + label}/>
        <small id="emailHelp" className="form-text text-muted">{error}</small>
    </div>
