import React from 'react'

const VideoQuiz = () => {
  return (
    <>
      <main className='w-[70%] p-9'>
        <h1 className='text-[#243654] text-[30px] font-[700]'>Welcome to Riskspot Education! </h1>
        <p className='text-[22px] font-[500] text-[#2436549C]'>Take our courses to know more about cybersecurity.</p>
        <div className='shadow-md pt-6 mt-4 h-[500px] p-12'>
          <h1 className='text-[#243654] text-[29px] font-[500] mb-9'>What is the primary purpose of a firewall in a network?</h1>
          <ul className='text-[19px]'>
            <li><input type="checkbox" className='mr-2' /><span>To detect malware on a computer</span></li>
            <li><input type="checkbox" className='mr-2' /><span>To monitor network traffic</span></li>
            <li><input type="checkbox" className='mr-2' /><span>To control incoming and outgoing network traffic</span></li>
            <li><input type="checkbox" className='mr-2' /><span>To encrypt data during transmission</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default VideoQuiz