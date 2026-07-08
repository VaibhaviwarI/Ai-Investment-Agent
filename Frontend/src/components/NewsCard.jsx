import React from "react";

function NewsCard({ article }) {

  return (

    <div className="border rounded-xl p-4 shadow">

      <h3 className="font-bold text-lg">

        {article.title}

      </h3>

      <p className="text-gray-600 mt-2">

        {article.description}

      </p>

      <a

        href={article.url}

        target="_blank"

        rel="noreferrer"

        className="text-blue-600 mt-3 inline-block"

      >

        Read More →

      </a>

    </div>

  );

}

export default NewsCard;