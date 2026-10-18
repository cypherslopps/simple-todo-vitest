import { useState } from 'react';
import { select_completed_todos, select_uncompleted_todos } from '@/features/todo/todo_selectors'
import { edit_todo, toggle_todo_state, type ITodo } from '@/features/todo/todo_slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks'
import { Checkbox } from './ui/checkbox';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { CheckCheckIcon, ListTodoIcon } from 'lucide-react';
import AddTodoDrawer from './add_todo_drawer';
import { Button } from './ui/button';
import EditTodoDrawer from './edit_todo_drawer';

const TodoList = () => {
    const [open, setOpen] = useState(false)
    const completed_todos = useAppSelector(select_completed_todos) as ITodo[];
    const uncompleted_todos = useAppSelector(select_uncompleted_todos) as ITodo[];
    const dispatch = useAppDispatch()

    
    
    return (
        <section className="p-8 space-y-8">
            <blockquote className="space-y-6">
                <h4 className="font-black text-sm uppercase">Uncompleted</h4>

                <div className="space-y-4">
                    {uncompleted_todos.length ? uncompleted_todos.map(({ id, title, description, is_completed }) => (
                        <div key={id} className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium capitalize">{title}</h3>
                                <p className="text-sm">{description}</p>
                            </div>
                            
                            <div className="flex items-center gap-x-1">
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => setOpen(true)}
                                >Edit</Button>
                                <Checkbox 
                                    checked={is_completed}
                                    onCheckedChange={() => dispatch(toggle_todo_state(id))}
                                />
                            </div>

                            <EditTodoDrawer 
                                open={open} 
                                setOpen={setOpen} 
                                todo={{ id, title, description }} 
                            />
                        </div>
                    )) : (
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                <ListTodoIcon />
                                </EmptyMedia>
                                <EmptyTitle>No Todos Yet</EmptyTitle>
                                <EmptyDescription>
                                You haven&apos;t created any todos yet. Get started by creating
                                your first todo.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent className="flex-row justify-center gap-2">
                                <AddTodoDrawer />
                            </EmptyContent>
                        </Empty>
                    )}
                </div>
            </blockquote>

            <blockquote className="space-y-6">
                <h4 className="font-black text-sm uppercase">Completed</h4>
                
                <div className="space-y-4">
                    {completed_todos.length ? completed_todos.map(({ id, title, description, is_completed }) => (
                        <div key={id} className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium capitalize">{title}</h3>
                                <p className="text-sm">{description}</p>
                            </div>
                            
                            <Checkbox 
                                checked={is_completed}
                                onCheckedChange={() => dispatch(toggle_todo_state(id))}
                            />
                        </div>
                    )) : (
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                <CheckCheckIcon />
                                </EmptyMedia>
                                <EmptyTitle>No Completed Todos Yet</EmptyTitle>
                                <EmptyDescription>
                                    It seems you're yet to complete your tasks. Once a tasks is done, check the checkbox to complete.
                                </EmptyDescription>
                            </EmptyHeader>
                        </Empty>
                    )}
                </div>
            </blockquote>
        </section>
    )
}

export default TodoList