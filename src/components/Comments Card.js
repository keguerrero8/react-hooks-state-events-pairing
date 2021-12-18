import Comment from "./Comment";
import {useState} from "react";
function CommentsCard({comments}) {
    const [hideComments, setHideComments] = useState(true)
    //need state to handle hide comments button boolean
    function handleHideComment () {
        setHideComments(() => !hideComments)
    }   

    return (
      <>
        {hideComments ? (
            <>
                <div style={{margin : "20px"}}>
                    <button onClick={handleHideComment}>Hide Comments</button>
                </div>
                <hr/>
                <h2>{comments.length} Comments</h2>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/> )}   
            </>
        ) : (
            <div style={{margin : "20px"}}>
                <button onClick={handleHideComment}>Show Comments</button>
            </div>

        )}
     
      </>
    );
  }
  
  export default CommentsCard;