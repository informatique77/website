import React from "react";
import PropTypes from "prop-types"

import  SimpleButton  from "../Buttons/SimpleButton"

const News = ({ posts, home }) => {
  return (
    <>
      <div className="post-section">
        <h2>
          Actualités
        </h2>
        <div className="post-wrapper">{posts}</div>
        {
          posts.length > 3 && home ? <SimpleButton slug="/actualites" content="Plus d'articles"/> : null
        }
      </div>
    </>
  );
};

export default News;

News.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}