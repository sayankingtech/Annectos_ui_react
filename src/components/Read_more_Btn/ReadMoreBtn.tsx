import React from 'react'
import './ReadMoreBtn.css'
import { useNavigate } from 'react-router-dom';

const ReadMoreBtn: React.FC<any> = ({ targetSection }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (targetSection) {
      navigate(`/challenge-marketing-solution#${targetSection}`);
    } else {
      navigate('/challenge-marketing-solution');
    }
  };

  return (
    <div className='read_more_btn'>
      <button
        onClick={handleClick}
        className='rounded-[8px] p-1 mt-5 text-md'>Read More +</button>
    </div>
  )
}

export default ReadMoreBtn;