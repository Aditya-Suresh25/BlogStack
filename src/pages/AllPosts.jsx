import React, {useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components'
import { useSelector } from 'react-redux'

function AllPosts() {
  const [posts,setPosts] = useState([])
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    if (authStatus) {
      appwriteService.getPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
      })
    } else {
      setPosts([])
    }
  }, [authStatus])
  return (
    <div className='w-full py-8 p-4 overflow-x-hidden'>
        <Container>
           <div className='flex flex-wrap gap-4'>
            {posts.map((post) => (
            <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <PostCard {...post}/>
              </div>))}
           </div>
        </Container>
    </div>
  )
}

export default AllPosts