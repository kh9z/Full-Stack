import {ArticleT} from "@/type/article";

export default async function Page() {
    const dataArticles: ArticleT[] = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json()
        });
    return (
        <>
            <div className='flex flex-col justify-start p-4'>
                {dataArticles.map((element: ArticleT) =>
                    <div key={element.id}>
                        <p className="border-b border-sky-500">{element.id} {element.title}</p>
                    </div>
                )}
            </div>
        </>
    )
}