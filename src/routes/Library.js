import React from 'react'
import LibHeader from '../components/LibHeader'
import Books from '../components/Books'
import "../Library.css"

const Library = () => {
  return (
    <>
      <div className= "lib-header">
        <LibHeader></LibHeader>
      </div>
      <Books></Books>
    </>
  )
}

export default Library