import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      setPost(res.data)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    }
    )
    return () => {

    };
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetching

