import React from 'react'
import './ReadMoreBtn.css'
// import { useNavigate } from 'react-router-dom';

const ReadMoreBtn: React.FC<any> = ({ targetSection, handleReadMore }) => {

  return (
    <div className='read_more_btn'>
      <button
        onClick={() => handleReadMore(targetSection)}
        className='rounded-[8px] p-1 mt-5 text-md'>Read More +</button>
    </div>
  )
}

export default ReadMoreBtn;