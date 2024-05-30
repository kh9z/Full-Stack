import React from 'react';
import FavoriteArticle from '@/components/favorite-article'; // Правильний імпорт

interface ArticleT {
    id: number;
    title: string;
    body: string;
}


export default async function FavoriteArticlesPage() {
    const dataArticles: ArticleT[] = await getServerSideProps()

    return (
        <>
            <div className='flex flex-col justify-start p-4'>
                {dataArticles.map(article => (
                    <FavoriteArticle article={article} key={article.id}/>
                ))}
            </div>
        </>
    );
}

const getServerSideProps = async () => {
    const ids = [1, 3, 15];
    const fetchArticle = async (id: number) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return res.json();
    };

    return await Promise.all(ids.map(fetchArticle));
};
