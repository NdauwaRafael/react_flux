/**
 * Created by Raphael Karanja on 2019-01-04.
 */
import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {}
        }
    }

    async componentWillMount() {
        let authorId = this.props.params.id;
        if (authorId) {
            let author = await (await fetch('http://localhost:3004/authors/' + authorId)).json();
            this.setState({author});
        }
    }

}