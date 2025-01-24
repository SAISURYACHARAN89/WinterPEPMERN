import React, { useState } from "react";
import NewsItem from "./Newsitems";
// import "./newscss.css"
export default function News(){
    const[articles,setArticles] = useState([])
    async function fetchNews(){
        let data = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-12-24&sortBy=publishedAt&apiKey=555a5f64611a4a039b873d6cfaaae7b5')
        let news = await data.json();
        
        setArticles(news.articles)
        // console.log(news);
    }
    return (
        <div>
            <button onClick={fetchNews} >Click</button>
            {
                articles.map(item=> <NewsItem title = {item.title} description = {item.description} 
                    url = {item.url}
                    image = {item.urlToImage}></NewsItem>
                )

            }
        </div>
    )
}