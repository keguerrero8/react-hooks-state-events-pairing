function Comment({comment}) {
    //need state to handle hide comments button boolean
    return (
      <div>
       <h3>{comment.user}</h3>
       <p>{comment.comment}</p>
      </div>
    );
  }
  
  export default Comment;