import { useState } from "react";
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
  DrawerTrigger,
} from "@/components/ui/drawer"
import AddTodoForm from "./add_todo_form";

const AddTodoDrawer = () => {
    
    const [open, setOpen] = useState(false)
    const isMobile = useIsMobile() 

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
        >
            <DrawerTrigger render={<Button />}>New Todo</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Add new todo</DrawerTitle>
                    <DrawerDescription>Track all your tasks (uncompleted & completed)</DrawerDescription>
                </DrawerHeader>

                <div className="p-4">
                    <AddTodoForm />
                </div>
                
                <DrawerFooter>
                    <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default AddTodoDrawer