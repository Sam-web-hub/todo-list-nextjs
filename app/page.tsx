import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col min-h-[65vh] md:max-w-[40vw] sm:max-w-[50vw] max-sm:max-w-[60vw] rounded-md border-2 shadow-md py-5">
        <h1 className="flex justify-center items-center text-3xl font-bold md:text-md lg:text-4xl ">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}
