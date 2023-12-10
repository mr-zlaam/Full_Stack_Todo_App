import { useEffect, useState } from "react";
import TodoForm from "./components/todoform";
import Table from "./components/table";
import axios, { AxiosResponse } from "axios";

export interface Todo {
  // Define your todo item properties here
  id: number;
  // other properties...
}

const App = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<Todo[]> = await axios.get(
        "http://127.0.0.1:8000/v1/api/todo/"
      );
      console.log(response.data);
      setTodo(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const deleteTodo = async (id) => {
    try {
      const dlt = await axios.delete(
        `http://127.0.0.1:8000/v1/api/todo/${id}/`
      );
      const newdlte = todo.filter((item) => {
        return item.id !== id;
      });
      setTodo(newdlte);
      console.log(dlt);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/v1/api/todo/${id}/`,
        value
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" ">
        <TodoForm fetchData={fetchData} deleteTodo={deleteTodo} />
        <Table todo={todo} setTodo={setTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default App;
