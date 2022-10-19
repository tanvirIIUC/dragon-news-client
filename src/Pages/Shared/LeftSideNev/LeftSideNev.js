import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNev = () => {

    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categoris')
        .then(res=>res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h2>All Categories</h2>
            <div>
                {
                    categories.map(categorie => <p key={categorie.id}>

                        <Link to={`/category/${categorie.id}`}>{categorie.name}{categorie.id}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNev;