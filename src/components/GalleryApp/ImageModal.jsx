import Modal from "react-modal"
Modal.setAppElement("#root")
import { FcLike } from "react-icons/fc"
export const ImageModal = ({ isOpenModal, chosenPhoto, closeModal }) => {
  const { alt_description, urls, description, likes } = chosenPhoto
  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        className='max-h-[80%] max-w-[80%] overflow-hidden border-none p-0 shadow-2xl relative'
        overlayClassName='flex justify-center items-center fixed inset-0 bg-gray-900/30'
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
      >
        <img
          src={urls.regular}
          alt={alt_description}
          className='w-full h-full object-center object-cover rounded-2xl'
        />
        <div className=' flex gap-2 justify-between bg-linear-to-t from-gray-950 to-gray-500/0 text-white absolute bottom-0 text-2xl w-full h-fit p-3 pt-5'>
          <p>{description}</p>
          <p className='flex gap-2 justify-center items-center'>
            {likes} <FcLike />
          </p>
        </div>
      </Modal>
    </div>
  )
}
