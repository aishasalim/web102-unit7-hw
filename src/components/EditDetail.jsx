import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Form from './Form';

const EditDetail = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, name: "", speed: "", color: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('crewmate')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error.message);
            } else {
                setPost(data);
            }
        };

        fetchPost();
    }, [id]);

    // UPDATE post
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .update({ name: post.name, speed: post.speed, color: post.color })
            .eq('id', id);

        window.location = "/gallery";
    }

    // DELETE post
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .delete()
            .eq('id', id);
        alert("Got succesfully deleted");
        window.location = "/gallery";
    }

    return (
        <>
            <h1>Update Your Crewmate :)</h1>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="" height="200" />
            <h2>Current Crewmate Info:</h2>
            <p>Name: {post.name}</p>
            <p>Speed: {post.speed}</p>
            <p>Color: {post.color}</p>
            <Form post={post} handleChange={handleChange} handleRadioChange={handleRadioChange} />

            <div>
                <button type="submit" value="Submit" onClick={updatePost} style={{ marginRight: '25px' }}>Update Crewmate</button>
                <button className="deleteButton" onClick={deletePost}>Delete Crewmate</button>
            </div>
        </>
    );
};

export default EditDetail;


