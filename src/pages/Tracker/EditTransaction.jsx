import { useParams } from "react-router-dom"
import EditForm from "../../components/TrackerApp/EditForm"

const EditTransaction = () => {
  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <h2 className='text-2xl font-bold text-center'>Edit transaction</h2>
      <EditForm />
    </div>
  )
}

export default EditTransaction
