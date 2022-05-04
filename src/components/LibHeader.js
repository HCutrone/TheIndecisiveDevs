import React from 'react'
import {GiBookshelf} from 'react-icons/gi'
import "../Library.css"

const iconstyle = { color: "white", postion: "relative", marginRight: "1%", display : 'inline-flex'
}


function LibHeader() {
  return (
    <div className='libheader'>
            <GiBookshelf style = {iconstyle}></GiBookshelf>
    <libh1>
        Novella Library 
    </libh1>
    </div>
  )
}

export default LibHeader;