import React from "react";
import Post from "./Post";
import shortid from 'shortid';


const PostList = ({matchedData}) => {

  return (
      <div className="col-12 p-5 row">
        {matchedData.map((post) => (
         <Post key={shortid.generate()} postData={post} />
        ))}
      </div>
  );
};

export default PostList;
