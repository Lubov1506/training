import { nanoid } from "@reduxjs/toolkit"
import { Field, Form, Formik } from "formik"
import moment from "moment"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {
  selectExpenseCats,
  selectIncomeCats,
} from "../../redux/tracker/categoriesSlice"
import DatePicker from "react-datepicker"
import {
  editTransaction,
  selectTransactions,
} from "../../redux/tracker/transactionsSlice"

const EditForm = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const transactions = useSelector(selectTransactions)
  const editedTransaction = transactions.find((item) => item.id === id)
  console.log(editedTransaction);
  

  const navigate = useNavigate()
  const initialValues = {
    ...editedTransaction,
    sum: Math.abs(editedTransaction.sum)
  }
  const onSubmit = (data, options) => {
    console.log(data);
    
    const sum = data.type === "Income" ? +data.sum : -data.sum
    dispatch(
      editTransaction({
        id: editedTransaction.id,
        ...data,
        date: moment(startDate).format("YYYY-MM-DD"),
        sum
      })
    )
    setTimeout(()=>{
        navigate('/')
    }, 1000)
    options.resetForm()
  }
  const onCancel = () => {
    navigate("/")  
    return initialValues
  }
  const expenseCats = useSelector(selectExpenseCats)
  const incomeCats = useSelector(selectIncomeCats)
  console.log(incomeCats, expenseCats)

  const [startDate, setStartDate] = useState(editedTransaction.date)
  return (
    <div className='card bg-base-100 w-1/2 shrink-0 shadow-2xl mx-auto '>
      <div className='card-body w-full '>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values }) => (
            <Form className='fieldset flex flex-col gap-4  '>
              <div className='form-control '>
                <label className='label flex flex-col gap-2 items-start '>
                  Sum
                  <Field
                    type='number'
                    name='sum'
                    className='input w-full'
                    placeholder='enter sum'
                  />
                </label>
              </div>
              <div className='form-control'>
                <label className='label flex flex-col gap-2 items-start '>
                  Type
                  <Field as='select' name='type' className='input w-full'>
                    <option value='Expense'>Expense</option>
                    <option value='Income'>Income</option>
                  </Field>
                </label>
              </div>
              <div className='form-control'>
                <label className='label flex flex-col gap-2 items-start'>
                  Category
                  <Field as='select' name='category' className='input w-full'>
                    <option value=''>Select category</option>
                    {(values.type === "Expense" ? expenseCats : incomeCats).map(
                      (cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      )
                    )}
                  </Field>
                </label>
              </div>
              <div className='form-control'>
                <label className='label flex flex-col gap-2 items-start w-full'>
                  Date
                  <DatePicker
                    name='date'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className='input input-bordered w-full'
                    portalId='root'
                  />
                </label>
              </div>
              <div className='form-control'>
                <label className='label flex flex-col gap-2 items-start'>
                  Comment
                  <Field
                    type='text'
                    name='comment'
                    className='input w-full'
                    placeholder='enter sum'
                  />
                </label>
              </div>
              <div></div>
              <div className='flex gap-4'>
                <button
                  className='btn btn-neutral mt-4 flex-grow'
                  type='submit'
                >
                  Edit
                </button>
                <button
                  className='btn btn-secondary mt-4 flex-grow'
                  type='button'
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default EditForm
