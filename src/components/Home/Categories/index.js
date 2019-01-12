/**
 * Created by Raphael Karanja on 2019-01-12.
 */
import React from 'react';
import Category from './Category';
import '../../../css/categories.css';
export default (props)=>
    <div className="categories">
        <Category image="/img/img1.jpg" title="Historic Discoveries" />
        <Category image="/img/img2.jpg" title="Social Life" />
        <Category image="/img/img3.jpg" title="People" />
        <Category image="/img/img4.jpg" title="Skills and Mastery" />
        <Category image="/img/img5.jpg" title="Life of Adventure" />
    </div>