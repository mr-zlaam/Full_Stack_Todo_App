import {} from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";

interface TodoItem {
  id: number;
  iscompleted: boolean;
  body: string;
  updated: string; // Assuming 'updated' is a string, adjust as needed
}

interface TableProps {
  todo: TodoItem[];
}

const Table: React.FC<TableProps> = ({ todo, deleteTodo }) => {
  return (
    <div className="flex h-[70vh] justify-center items-start py-10">
      <table className="w-11/12 max-w-4xl border-[2px] border-black">
        <thead className="border-[2px] border-black ">
          <tr>
            <th className=" max-w-[500px]  p-2 text-center border-r-2 border-black">
              S.No
            </th>
            <th className=" max-w-[500px]  p-2 text-center border-r-2 border-black">
              CheckBox
            </th>
            <th className=" max-w-[500px]  p-2 text-center border-r-2 border-black">
              Todo
            </th>
            <th className=" max-w-[500px]  p-2 text-center border-r-2 border-black">
              Status
            </th>
            <th className=" max-w-[500px]  p-2 text-center border-r-2 border-black">
              DataCreated
            </th>
            <th className=" max-w-[500px]  p-2 text-center border-r-2 border-black">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {todo.map((items: TodoItem, index: number) => {
            return (
              <tr key={items.id}>
                <td className=" border-b-2 text-center px-4 border-r-2 border-black">
                  <strong>{index}</strong>
                </td>
                <td className=" border-b-2 text-center px-4 border-r-2 border-black">
                  {items.iscompleted ? <div>True</div> : <div>False</div>}
                </td>
                <td className=" border-b-2 text-center px-4 border-r-2 border-black">
                  {items.body}
                </td>
                <td className=" border-b-2 text-center px-4 border-r-2 border-black">
                  Done
                </td>
                <td className=" border-b-2 text-center px-4 border-r-2 border-black">
                  {new Date(items.updated).toLocaleString()}
                </td>
                <td className=" border-b-2 text-center px-4 border-r-2 border-black">
                  <button
                    className="text-white font-semibold bg-red-700 px-3 py-1 mx-2 my-1 rounded-md"
                    onClick={() => {
                      deleteTodo(items.id);
                    }}
                  >
                    <FaRegTrashAlt />
                  </button>
                  <button className="text-white font-semibold bg-green-700 px-3 py-1 mx-2 my-1 rounded-md">
                    <MdOutlineEditNote />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
