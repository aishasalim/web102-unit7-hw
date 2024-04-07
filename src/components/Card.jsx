import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Outlet, Link } from "react-router-dom";

const Card = (props) => {
  const [shadow, setShadow] = useState('');

  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from('crewmate')
        .select()
        .eq('id', props.id)
        .single();

      if (error) {
        console.error('Error fetching bet count:', error.message);
      }

      // Set the shadow based on the props.color value
      if (props.color === 'Rainbow') {
        setShadow('3px -2px 5px #4c0082b6, 6px -5px 5px #0000ff71, 9px -8px 5px #00ff007d, 12px -10px 5px #ffff0093, 15px -12px 5px #ff8000d7, 18px -15px 5px #eb1818af, 3px 3px 10px 3px #0000');

      } else {
        // Set default shadow
        setShadow(`7px -5px 10px ${props.color}`);
      }
    };

    fetchCount();
  }, [props.color, props.id]); // Fetch count whenever props.id or props.color changes

  return (
    <>
    <Link style={{ color: "#242424", textDecoration: "none"}} to={'/' + props.id}>
      <div className="card" style={{ boxShadow: shadow, width: '200px' }}>
        <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png" alt="" width="100px" />
        <h3 className="name">Name: {props.name}</h3>
        <h3 className="speed">Speed:{props.speed}</h3>
        <h3 className="color">Color: {props.color}</h3>
        
        <button>
          <Link style={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none"}} to={'/edit/' + props.id}>
              Edit Crewmate
          </Link>
        </button>
      </div>
    </Link>
    </>
  );
};

export default Card;
