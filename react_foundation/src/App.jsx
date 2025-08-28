import { useState } from "react";
const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { text: input, done: false }]);
      setInput('');
    }
  };

  const deleteTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };


  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex flex-col border-x-1 p-4">

        <span className="text-3xl mb-4 pb-2 flex justify-center items-center border-b-1  border-gray-300">Todo App</span>
        {todos && todos.length > 0 ? (<ul className="flex flex-col gap-2">
          {todos.map((todo, idx) => (
            <div className="flex justify-between border-b-1  border-gray-300">
              <li key={idx} className=" p-1 m-2">
                {`${idx + 1} : ${todo.text}`}
              </li>
              <button onClick={() => deleteTodo(idx)} className="text-white rounded-xl px-2 my-2 bg-gray-200 text-l">🗑️</button>
            </div>
          ))}
        </ul>) : (<span className="flex justify-center items-center text-gray-300">No Todo Found </span>)}

        <form onSubmit={addTodo} className=" flex gap-2 mt-4">
          <input value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a todo"
            className="p-2 border-1 rounded-xl"
          ></input>
          <button type="submit" className="bg-zinc-800 text-zinc-200 p-2 rounded-xl">Add</button>
        </form>

      </div>
    </div >
  )
};


export default App