import React, { useState } from 'react'
import VideoCourse from './VideoCourse'
import CourseNote from './CourseNote'
import VideoQuiz from './VideoQuiz'

const VHome = () => {
    const [video, setVideo] = useState(true)
    const [note, setNote] = useState(false)
    const [quiz, setQuiz] = useState(false)

    const handleVideo = () => {
        setVideo(true);
        setNote(false);
        setQuiz(false);
    }

    const handleNote = () => {
        setVideo(false);
        setNote(true);
        setQuiz(false);
    }

    const handleQuiz = () => {
        setVideo(false);
        setNote(false);
        setQuiz(true);
    }

    return (
        <>
            <main className='flex'>
                <div className='w-[20%] h-[90vh] bg-[#1B2941]'></div>
                <div className='w-[80%] flex'>
                    {video && <VideoCourse />}
                    {note && <CourseNote />}
                    {quiz && <VideoQuiz />}
                    <div className='w-[30%] h-[90vh] flex items-center justify-center'>
                        <ul className='text-[19px] shadow-md p-4 w-[90%]'>
                            <hr />
                            <li className=''><input type="checkbox" className='mr-2 py-4' />1.<button onClick={handleVideo} className={video ? 'cursor-pointer font-[700] transition-all' : 'cursor-pointer transition-all'}>Video Cybersecurity Introduction</button></li>
                            <hr />
                            <li className=''><input type="checkbox" className='mr-2 py-4' />2.<button onClick={handleNote} className={note ? 'cursor-pointer font-[700] transition-all' : 'cursor-pointer transition-all'}>Course with Ananse</button></li>
                            <hr />
                            <li className=''><input type="checkbox" className='mr-2 py-4' />3.<button onClick={handleQuiz} className={quiz ? 'cursor-pointer font-[700] transition-all' : 'cursor-pointer transition-all'}>Quiz</button></li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default VHome