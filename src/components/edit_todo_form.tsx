import { useCallback, useEffect } from 'react';
import useEditTodoForm from '@/hooks/use_edit_todo_form';
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import type { ITodo } from '@/features/todo/todo_slice';

interface IEditTodoForm {
    onClose: () => void;
    todo: Omit<ITodo, "is_completed">
}

const EditTodoForm = ({ onClose, todo }: IEditTodoForm) => {
  const { formik, can_submit } = useEditTodoForm(onClose);

  const populate_todo = useCallback(() => {
    if (!todo) return null;

    Object.entries(todo).map(([key, value]) => {
        formik.setFieldValue(key, value)
    })
  }, [todo])

  useEffect(() => {
    populate_todo()
  }, [populate_todo])

  return (
    <form className="space-y-3" onSubmit={formik.handleSubmit}>
      <Input 
        type="text"
        name="id"
        hidden
      />

      <Input 
        type="text"
        name="title"
        placeholder="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.title}
      />

      <Textarea 
        placeholder="Type in todo description"
        name="description"
        value={formik.values.description || "random"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.description}
      />
      <Button 
        type="submit" 
        disabled={can_submit}
        is_loading={formik.isSubmitting}
        className="w-full"
      >
        Submit
      </Button>
    </form>
  )
}

export default EditTodoForm