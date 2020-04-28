import React from 'react'

const Articles = ({ posts }) => {
    return (
        <div>
           {posts.map((article, key) => (
            <div key={article.key}>
                <h2>{article.title}</h2>
                <p>{article.article}</p>
                <span>{article.authorname}</span>
            </div>
            ))}
        </div>
    );
};

export default Articles;
