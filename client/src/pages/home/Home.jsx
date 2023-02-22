import React from 'react'
import Channel from '../../components/channel/Channel'
import Product from '../../components/product/Product'
import Post from '../../components/post/Post'

const Home = () => {
  return (
    <div className='flex h-auto bg-lime-200'>
      <div className='w-2/3 py-4'>
        <Post />
      </div>
      <div className='w-1/3 py-4'>
        <div className='m-2 p-4 border-y-4 border-x-2 border-solid border-lime-500 rounded-xl bg-yellow-50 drop-shadow-lg'>
          <Product />
        </div>
        <div className='m-2 p-4 border-y-4 border-x-2 border-solid border-lime-500 rounded-xl bg-yellow-50 drop-shadow-lg'>
          <Channel />
        </div>
      </div>
    </div>
  )
}

export default Home