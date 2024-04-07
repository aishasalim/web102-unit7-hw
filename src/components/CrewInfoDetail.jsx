import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Outlet, Link } from "react-router-dom";

const CrewInfoDetail = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, name: "", speed: "", color: "" });

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

    let speedMessage;
    if (!isNaN(post.speed)) {
        if (parseInt(post.speed) >= 10) {
            speedMessage = "Wow, this Crewmate is super fast, that will be helpful! 🏃💨";
        } else {
            speedMessage = "You may want to find a Crewmate with more speed, this one is kind of slow 😬";
        }
    } else {
        speedMessage = "You may want to put numbers in there 😬";
    }



    return (
        <>
            <h1>Crewmate: {post.id}</h1>
            <h2>Stats:</h2>
            <h3>Speed: {post.speed} mph</h3>
            <h3>Color: {post.color}</h3>
            <p>{speedMessage}</p>

            <button style={{ marginRight: '25px' }}>
                <Link style={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none"}} to={'/edit/' + post.id}>
                    Edit Crewmate
                </Link>
            </button>
            <button>
                <Link style={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none"}} to={'/gallery'}>
                    Back to Gallery
                </Link>
            </button>
        </>
    );
};

export default CrewInfoDetail;
