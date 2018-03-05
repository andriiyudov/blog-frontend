import React, { Component } from 'react';
import RenderUser from '../components/RenderUser';

export default class User extends Component {

    componentDidMount(){
        const userParam = this.props.match.params.userParams;

        this.props.getUserWithPosts(userParam);
    }

    render(){
        const { user, getUserWithPostsStatus, match } = this.props;
        const { success, failure } = getUserWithPostsStatus;

        const displayUser = (
            (failure) ?
                <div>User not found</div> :
                (success) ?
                    <RenderUser user={user} url={match.url} /> :
                    <div>Rendering...</div>
        );

        return (
            displayUser
        )
    }
}
