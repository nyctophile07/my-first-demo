import React from 'react'

function Product(props) {
  return (
    <>
    <div className='font-bold p-10'>{props.name}</div>
    <div className='font-bold p-10'>{props.info.region}</div>
    <div className='font-bold p-10'>{props.info.year}</div>
  </>)
}

export default Product