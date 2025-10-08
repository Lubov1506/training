import { useGallery } from "../../store/hooks"

export const ImageCard = ({ img }) => {
  const { urls, alt_description } = img
  const { handleChosePhoto } = useGallery()
  return (
    <li
      className='p-1 rounded-sm  h-[250px] overflow-hidden'
      onClick={() => handleChosePhoto(img)}
    >
      <img
        src={urls.small}
        alt={alt_description}
        className='h-full w-full object-center object-cover '
      />
    </li>
  )
}
