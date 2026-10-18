import { useAppSelector } from "@/hooks/store-hooks";
import { select_todos_count } from "@/features/todo/todo_selectors";
import AddTodoDrawer from "./add_todo_drawer";

const Header = () => {
    const todo_count = useAppSelector(select_todos_count);

    return (
        <header className="p-3 flex items-center justify-between">
            <h1 className="font-bold flex items-center gap-x-1">
                Todo
                {todo_count > 0 && (
                    <span aria-label="todo count" aria-hidden={todo_count > 0} className="text-xs bg-blue-600 rounded-full size-5 flex items-center justify-center">{todo_count}</span>
                )}
            </h1>

            <AddTodoDrawer />
        </header>
    )
}

export default Header