import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const categoryNews = useLoaderData();
  
    return (
        <div>
            <h1>Catagory {categoryNews.length}</h1>

            {
                categoryNews.map(news=><NewsSummaryCard
                   key={news._id}
                   news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;