import { FaEye } from "react-icons/fa"
import { BiSolidLike, BiSolidDislike } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"
export const SinglePost = ({ id, title, reactions, views, body, tags }) => {
  console.log(body)
const params = useParams()

  return (
    <li key={id} className='flex flex-col gap-2 p-2 px-3 shadow-md'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-[16px]'>{body}</p>
      <div className='flex flex-col justify-between gap-4 sm:flex-row'>
        {!!tags.length && (
          <ul className='flex gap-2 flex-wrap'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='bg-gray-600 text-white p-1 px-2 rounded-md'
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <div className='flex gap-2  justify-center items-center flex-wrap'>
          <p className='flex gap-2  justify-center items-center'>
            <FaEye /> <span>{views}</span>
          </p>
          <p className='flex gap-2  justify-center items-center'>
            <BiSolidLike /> <span>{reactions.likes}</span>
          </p>
          <p className='flex gap-2  justify-center items-center'>
            <BiSolidDislike /> <span>{reactions.dislikes}</span>
          </p>
        </div>
      </div>
      <Link to={`details/${id}`} className='btn'>
        Show more
      </Link>
    </li>
  )
}

// body: "He swung back the fishing pole and cast the line which ell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear."
// id: 32
// reactions: {likes: 227, dislikes: 3}
// tags: (3) ['mystery', 'american', 'english']
// title: "He swung back the fishing pole and cast the line"
// userId: 6
// views: 818
