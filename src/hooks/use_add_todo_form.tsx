import { z } from "zod";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useAppDispatch } from "./store-hooks";
import { add_todo } from "@/features/todo/todo_slice";

export const todo_schema = z.object({
    title: z.string({ message: "Title can't be empty" }).min(2, { message: "Fill in title" }),
    description: z.string({ message: "Description can't be empty" }).min(7, { message: "Fill in description" })
})

const useAddTodoForm = () => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        validationSchema: toFormikValidationSchema(todo_schema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (value, { resetForm }) => {
            await new Promise(resolve => setTimeout(() => {resolve("Loading complete!")}, 2000))
            dispatch(add_todo(value))
            resetForm()
        }
    });
    
    const can_submit = formik.isSubmitting || !formik.values || !formik.dirty;

    return { formik, can_submit }
}

export default useAddTodoForm