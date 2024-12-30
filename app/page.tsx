import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="h-1/6 w-full">
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 rounded-md border-2 shadow-md py-10">
      <h1 className="flex justify-center items-center text-3xl font-bold">Todo List</h1>
        <TodoList />
      </div>
      <div className="h-1/6 w-full">

      </div>
    </div>
  );
}
