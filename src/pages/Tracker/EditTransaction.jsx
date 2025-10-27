import { useParams } from "react-router-dom"

const EditTransaction = () => {
  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <h2 className='text-2xl font-bold text-center'>Edit transaction</h2>
    </div>
  )
}

export default EditTransaction
