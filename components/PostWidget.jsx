import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(category,slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [input])
  
  return (
    <div>PostWidget</div>
  )
}

export default PostWidget