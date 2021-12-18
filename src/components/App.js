import video from "../data/video.js";
import DetailsCard from "./Details Card.js";
import CommentsCard from "./Comments Card.js";

//App
//--Details Card
//--Comments Card
//----Comment

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <DetailsCard video={video}/>
      <CommentsCard comments={video.comments}/>
    </div>
  );
}

export default App;
