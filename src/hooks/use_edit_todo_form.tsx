import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useAppDispatch } from "./store-hooks";
import { todo_schema } from "./use_add_todo_form";
import { edit_todo } from "@/features/todo/todo_slice";


const useEditTodoForm = (closeDrawer: () => void) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            id: "",
            title: "",
            description: ""
        },
        validationSchema: toFormikValidationSchema(todo_schema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (value, { resetForm }) => {
            await new Promise(resolve => setTimeout(() => {resolve("Loading complete!")}, 2000))
            dispatch(edit_todo(value))
            resetForm()
            closeDrawer()
        }
    });
    
    const can_submit = formik.isSubmitting || !formik.values || !formik.dirty;

    return { formik, can_submit }
}

export default useEditTodoForm