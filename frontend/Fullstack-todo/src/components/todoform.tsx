import axios from "axios";
import { useState, ChangeEvent } from "react";

interface NewTodo {
  body: string;
}

const TodoForm = ({ fetchData, deleteTodo }) => {
  const [newTodo, setNewTodo] = useState<NewTodo>({
    body: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prev) => ({ ...prev, body: event.target.value }));
    console.log(newTodo);
  };

  const handleAddTodo = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/v1/api/todo/", newTodo);
      console.log("Adding todo:", newTodo);
      fetchData();
      deleteTodo();
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  return (
    <>
      <div className="h-[30vh] flex justify-center items-center">
        <input
          onChange={handleChange}
          value={newTodo.body}
          type="text"
          placeholder="Add Todo"
          className="text-[18px] py-3 px-10 rounded-lg outline-none rounded-r-none bg-indigo-300 placeholder:text-white/90 placeholder:font-bold placeholder:text-center font-semibold"
        />
        <input
          type="button"
          value="Add"
          onClick={handleAddTodo}
          className="text-[18px] py-3 px-10 rounded-lg rounded-l-none outline-none bg-indigo-400 cursor-pointer font-bold"
        />
      </div>
    </>
  );
};

export default TodoForm;
