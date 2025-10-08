import { useGallery } from "../../store/hooks"
import { ImageCard } from "./ImageCard"

export const ImageGallery = ({ onOpenModal }) => {
  const { imgs } = useGallery()
  return (
    <ul className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] gap-2 justify-center'>
      {imgs?.map((img) => (
        <ImageCard key={img.id} img={img} onOpenModal={onOpenModal} />
      ))}
    </ul>
  )
}
