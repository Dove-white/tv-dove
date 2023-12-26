import React from 'react'
import VideoImage from '../../assets/img/videoLibrary.png'
import VideoButton from '../../assets/img/VideoButton.png'

const VideoCourse = () => {
  return (
    <>
      <main className='w-[70%] p-9 bg-red'>
        <h1 className='text-[#243654] text-[30px] font-[700]'>Welcome to Riskspot Education! </h1>
        <p className='text-[22px] font-[500] text-[#2436549C]'>Take our courses to know more about cybersecurity.</p>
        <div className='relative mt-2'>
          <img className='' src={VideoImage} alt="" />
          <img className='absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 w-[20%]' src={VideoButton} alt="" />
        </div>
      </main>
    </>
  )
}

export default VideoCourse