import React from 'react'

const Card = ({name,desc,img}) => {
  return (
    <div className='min-h-screen'>
    <div className='flex flex-col justify-center border w-54 m-auto '>
      <div className='w-48 items-center justify-center m-auto mt-2'><img src={img} alt="" /></div>
      <div><h1>{name}</h1></div>
      <div><h2>{desc}</h2></div>
    </div></div>
  )
}

export default Card
