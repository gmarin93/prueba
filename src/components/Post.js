import React,{useState,useEffect} from "react";
import CommentList from './CommentList';
import {getCommentsState,getCommentsStateSuccesss} from '../actions/CommentsActions';
import { useDispatch } from "react-redux";


const Post = ({ postData}) => {

  useEffect(() => {
    
    function gettingNewComments(){
      if(display)
        getComments();
      else
        getCommentsSuccess();

    };

    gettingNewComments();
       
  }, []);


  const dispatch = useDispatch();
  
  const getComments = () => dispatch(getCommentsState());
  const getCommentsSuccess = () => dispatch(getCommentsStateSuccesss());

  const { comments, post } = postData;
  const { id, title, body } = post;

  const [display, displayComments] = useState(false); //SHow or hide comments

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <p className="font-weight-bold p-3 text-uppercase">{title}</p>
        <div className="card-body">
          <p className="card-text text-capitalize">{body}</p>
        </div>
        <div className="card-footer mx-auto p-2">

          {display ? (
            <CommentList key={id} id={id} comments={comments}/>
          ) : (
            <button key={id} onClick={() => displayComments(!display)}>
              See Comments
            </button>
          )}

          {display ? (
            <button onClick={() => displayComments(!display)}>
              Hide Comments
            </button>
          ) : null}

        </div>
      </div>
    </div>
  );
};

export default Post;
