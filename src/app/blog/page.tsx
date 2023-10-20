//blogs and tutorials
import Blog from '@/components/Blog'
import Tutorials from '@/components/Tutorials'
import React from 'react'

function page() {
  return (
    <div>
        <div className="div"><Blog/></div>
        <div className="div"><Tutorials/></div>
    </div>
  )
}

export default page