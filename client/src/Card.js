import React from 'react';

const Card = (props) => {
    const { article } = props;
    return (
        <div>
            <p>{article.id}</p>
            <p>{article.name}</p>
            <p>{article.total}</p>
        </div>
    )
}

export default Card;
