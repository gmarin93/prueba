import React,{useState} from "react";
import {AddNewComment} from '../actions/CommentsActions';
import { useDispatch, useSelector } from "react-redux";

const NewComment = ({id}) => {

    const dispatch = useDispatch();
    
    const SvdNewComment = (comment) => dispatch(AddNewComment(comment));

    const allComments = useSelector((state) => state.commentsState.comments);

    const [comment,SvdComment] = useState({
        postId:0,   
        id:0,
        name:'',
        email:'',
        body:''
    });

  /**
   * Add new comments
   * @param {*} e 
   * @returns 
   */
 const addComment = e =>{
  
    e.preventDefault(); 

    const {name,email,body} = comment;
    

    if(name === '' || email === '' || body === ''){
        console.log('Incomplete Data');
        return;
    }

    comment.id = parseInt(allComments.length+1);
    comment.postId = id;

    SvdNewComment([...allComments,comment]);
 };

 //Adding to the state all data caught from the form
 const handleOnchange = e =>{
    SvdComment({
        ...comment,
        [e.target.name]: e.target.value
    })
 }

  return (
    <div className="mb-4"> 
      <form onSubmit={addComment}>
        <label>Name: </label>
        <input className="mb-1" id="name" name="name" type="text" onChange={e=>handleOnchange(e)} />
        <label>Email: </label>
        <input className="mb-1" id="email" name="email" type="text" onChange={e=>handleOnchange(e)}/>
        <label>Body: </label>
        <input className="mb-1"  id="body" name="body" type="text-area" onChange={e=>handleOnchange(e)}/>
        <input type="submit" value="Add Comment" />
      </form>
    </div>
  );
};

export default NewComment;
