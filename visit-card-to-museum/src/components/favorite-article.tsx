import React from 'react';

interface ArticleT {
    id: number;
    title: string;
    body: string;
}

function FavoriteArticle({ article }: { article: ArticleT }) {
    return (
        <div>
            <p className="border-b border-sky-500">{article.id} {article.title}</p>
        </div>
    );
}

export default FavoriteArticle;