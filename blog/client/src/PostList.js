import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateComment from './CommentCreate';
import CommentList from './CommentList';

const PostsList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    },[posts]);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{ width: "30%", marginBottom: "20px"}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CreateComment postId={post.id} />
                </div>
            </div>
    )});
    return (
        <div className="d-flex flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
)};

export default PostsList;
