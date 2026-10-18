import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from './ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import EditTodoForm from './edit_todo_form';
import type { ITodo } from '@/features/todo/todo_slice';

interface IEditTodoDrawer {
    open: boolean;
    setOpen: (v: boolean) => void;
    todo: Omit<ITodo, "is_completed">
}

const EditTodoDrawer = ({ open, setOpen, todo }: IEditTodoDrawer) => {
    const isMobile = useIsMobile() 

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
        >
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Add new todo</DrawerTitle>
                    <DrawerDescription>Track all your tasks (uncompleted & completed)</DrawerDescription>
                </DrawerHeader>

                <div className="p-4">
                    <EditTodoForm todo={todo} onClose={() => setOpen(false)} />
                </div>
                
                <DrawerFooter>
                    <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default EditTodoDrawer