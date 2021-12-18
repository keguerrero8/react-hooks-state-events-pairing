import {useState} from "react";
function DetailsCard({video}) {
    //need state to handle upvotes, downvotes
    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)
    function handleUpVoteClick () {
        setUpVotes(() => upVotes+1)
    }

    function handleDownVoteClick () {
        setDownVotes(() => downVotes+1)
    }

    return (
      <>
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={video.title}
        />
        <h1>{video.title}</h1>
        <p><span>{video.views} Views | Uploaded {video.createdAt}</span></p>
        <button onClick={handleUpVoteClick}>{upVotes}👍</button>
        <button onClick={handleDownVoteClick}>{downVotes}👎</button>
      </>
    );
  }
  
  export default DetailsCard;