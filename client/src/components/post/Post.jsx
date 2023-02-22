import React, { useState } from 'react'
import { IoCartSharp, IoLocationSharp, IoPricetag } from "react-icons/io5";
import { BsBookmarkHeartFill, BsCalendarDateFill, BsFillPersonCheckFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

const content = `Extracted from ingredients of natural origin, the Hazeline product line is completely suitable for the skin, protects the skin from the sun and balances the pH. Besides, the essence from the fruit will help you have smooth and healthy skin.`;

const Post = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className='m-2 p-4 border-y-4 border-x-2 border-solid border-lime-500 rounded-xl bg-yellow-50 drop-shadow-lg'>
      <div style={{ alignItems: 'center' }} className='flex justify-between my-4'>
        <div style={{ alignItems: 'center' }} className='font-semibold pb-2 text-2xl flex'>
          Combo full set skin care from Hazeline
          <span className='text-lime-700 mx-4 text-lg cursor-pointer'>Follow</span>
        </div>
        <div style={{ alignItems: 'center' }} className='flex text-lime-700 font-bold'>
          <span style={{ alignItems: 'center' }} className='flex mx-2 py-2 px-4 rounded-lg bg-lime-400 cursor-pointer'>
            INTERESTED
            <BsBookmarkHeartFill className='mx-2' />
          </span>
          <span style={{ alignItems: 'center' }} className='flex mx-2 py-2 px-4 rounded-lg bg-lime-400 cursor-pointer'>
            SHARE
            <FaShare className='mx-2' />
          </span>
        </div>
      </div>
      {/* <div className='flex text-gray-500 italic'>
        <div style={{alignItems: 'center'}} className='w-1/4 flex'>
          <BsFillPersonCheckFill className='text-lime-700 mr-1' />
          Author: Kun
        </div>
        <div style={{alignItems: 'center'}} className='w-1/4 flex'>
          <BsCalendarDateFill className='text-lime-700 mr-1' />
          Date: todate
        </div>
        <div style={{alignItems: 'center'}} className='w-1/4 flex'>
          <IoLocationSharp className='text-lime-700 mr-1' />
          Location: 5 cu
        </div>
      </div> */}
      <div className='flex text-yellow-500 text-xl'>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </div>
      <div className='flex text-lime-600'>
        <div style={{ alignItems: 'center' }} className='flex w-1/3'>
          <IoPricetag />
          <p className='text-gray-600 px-2 italic'>Price: 100$</p>
        </div>
        <div style={{ alignItems: 'center' }} className='flex w-1/3'>
          <IoLocationSharp />
          <p className='text-gray-600 px-2 italic'>Location: Ho Chi Minh City</p>
        </div>
        <div style={{ alignItems: 'center' }} className='flex w-1/3'>
          <IoCartSharp />
          <p className='text-gray-600 px-2 italic'>Status: Sold Out</p>
        </div>
      </div>
      <div className='py-4'>
        {readMore ? content : `${content.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? (
            <p className='text-gray-500 italic'>'...show less'</p>
          ) : (<p className='text-gray-500 italic'>'read more'</p>)}
        </button>
      </div>
      <div>
        <img className='w-full'
          alt=''
          src='http://cdn.tgdd.vn/Files/2017/10/15/1033190/sua-rua-mat-tot-cho-da-chua-toi-30-ngan-202110271122182655.jpg'
        />
      </div>
    </div>
  )
}

export default Post