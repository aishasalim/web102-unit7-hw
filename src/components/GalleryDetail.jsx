import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './GalleryDetail.css';
import Card from './Card.jsx';
import { supabase } from '../client.js';

const GalleryDetail = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select();

            setPosts(data || []); // Set posts to an empty array if data is undefined
        }

        fetchPosts();
    }, []);

    return (
        <>
            <h1 className="gallery-heading">Your Crewmate Gallery!</h1>
            {posts && posts.length > 0 ? ( // Check if posts is defined and has length
                <>
                    <h2>You have {posts.length} crewmates right now!</h2>
                    <div className="ReadPosts">
                        {posts.map((post, index) =>
                            <Card key={post.id} id={post.id} name={post.name} speed={post.speed} color={post.color} />
                        )}
                    </div>
                </>
            ) : (
                <div className="no-crewmates">
                    <h2>You haven't made any crewmate yet!</h2>
                </div>
            )}
        </>
    );
};

export default GalleryDetail;

