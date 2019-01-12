/**
 * Created by Raphael Karanja on 2019-01-12.
 */
import React from 'react';
export default props=>
    <div className="category">
        <img src={props.image} alt=""/>
        <div className="category__body">
            <h3>
                {props.title}
            </h3>
        </div>
    </div>