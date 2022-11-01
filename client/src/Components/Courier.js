import React from 'react'
import Admin from './Admin'

function Courier({posts}) {

    console.log(posts)
  return (
    <div>
        <Admin posts={posts}/>
    </div>
  )
}

export default Courier