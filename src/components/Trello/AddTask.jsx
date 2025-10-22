import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { addTask } from "../../redux/trello/slice"
import { nanoid } from "@reduxjs/toolkit"

export const AddTask = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, options) => {
    const newTask = {
      id: nanoid(),
      title: values.title,
      boardId: 1,
    }
    dispatch(addTask(newTask))
    options.resetForm()
  }
  return (
    <div className='flex gap-2 justify-center items-center p-2 text-white'>
      <Formik initialValues={{ title: "" }} onSubmit={handleSubmit}>
        <Form className='flex gap-2'>
          <Field className='input' placeholder='enter task...' name='title' />
          <button className='btn' type='submit'>
            Add task
          </button>
        </Form>
      </Formik>
    </div>
  )
}
