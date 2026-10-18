import useAddTodoForm from '@/hooks/use_add_todo_form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const AddTodoForm = () => {
  const { formik, can_submit } = useAddTodoForm();

  return (
    <form className="space-y-3" onSubmit={formik.handleSubmit}>
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
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.description}
      />
      <Button 
        type="submit" 
        disabled={can_submit}
        className="w-full"
      >
        Submit
      </Button>
    </form>
  )
}

export default AddTodoForm