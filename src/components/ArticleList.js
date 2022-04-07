// ArticleList
// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article

import React from "react";
import Article from "./Article"
import {blogData} from './App'

const allArticles = blogData.posts.map((article) => {
    return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}></Article>
  })


function ArticleList(prop) {
  return (
    <main>
        {allArticles}
        <h1>{prop.name}</h1>
    </main>
  );
}

export default ArticleList;
