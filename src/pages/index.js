import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/PostsActions";
import { getComments } from "../actions/CommentsActions";
import PostList from "../components/PostList";


const Index = () => {
  const dispatch = useDispatch();

  const postsData = useSelector((state) => state.postsState.posts);
  const commentsData = useSelector((state) => state.commentsState.comments);
  const postLoading = useSelector((state) => state.postsState.loading);
  const commentLoading = useSelector((state) => state.commentsState.loading);

  const [matchedData, MatchingData] = useState([]);

  useEffect(() => {
    /**
     * Gets data from API
     */
    function getDatsAPI() {
      if (Object.keys(postsData).length === 0) {
        //Getting posts data
        dispatch(getPosts());
        //Getting comments data
        dispatch(getComments());
      }

      matchData(); //Match posts to their right comments
    };

    getDatsAPI();
  }, [postLoading, commentLoading]);

  /**
   * Match posts and their right comments
   */
  function matchData() {
    let arrayPosts = [];

    if (Object.keys(postsData).length > 0 && Object.keys(commentsData).length > 0 ) {
      postsData.map((post) => {
        let commentsFiltered = commentsData.filter((e) => e.postId === post.id);

        arrayPosts.push({
          post: post,
          comments: commentsFiltered
        });

      });
      MatchingData(arrayPosts);
    }
  }

  return (
    <div className="container">
        <div className="row justify-content-center">
        {matchedData.length > 0 && <PostList matchedData={matchedData}/> }
        </div>
    </div>
  );
};

export default Index;
