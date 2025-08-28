import { useState } from "react";
const App = () => {
  const [Likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(Likes + 1)
  }

  return (
    <div className="bg-zinc-900 h-screen flex justify-center items-center">

      <button onClick={handleClick} className="bg-zinc-800 text-zinc-200 p-4 rounded-3xl">Likes: {Likes}</button>
    </div>
  )
};


export default App