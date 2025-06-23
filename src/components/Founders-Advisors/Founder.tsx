import React from 'react'
import './Founder.css'

import image1 from '../../assets/Founders & Advisors/sarvani.jpg'
import image2 from '../../assets/Founders & Advisors/lalit.png'

const Founders: React.FC = () => {

    const founder = [
        {
            image: image1, name: 'Sharvani Sachidanand',
            designation: 'Director and Co-founder', description: [
                'An alumnus of Indo German Chamber of Commerce, Ms. Sharvani has straddled roles across industries with the likes of Robert Bosch (Blaupunkt), Pernod Ricard, Wipro Peripherals, Allergan Healthcare, and Addto before co-founding annectoś', 'Her exposure in Product Management, Marketing and Revenue Management gives an edge par comparison. As an entrepreneur who has seen the other side of table it equips her with a visibility and understanding of client expectations and gives her an edge of understanding consumer nd channel behaviour.'
            ]
        },
        {
            image: image2, name: 'Lalit Jain',
            designation: 'CFO and Co-founder', description: [
                'Lalit Jain is an entrepreneur and strategist since 2000 with a special knack for introducing new business ideas and leadership. After pursuing his post graduation CA internship with Deloitte, Lalit used his strong business acumen to execute a wide range of business strategies designed to establish a greater market presence and increase revenue and profitability.',
                'A strong believer in strategic alliances, he has established four businesses in diverse lines. From organic contract farming to Rewards & Retail, he has been building businesses from the groundup.',
                'At annectoś, he drives business vision & strategy in addition to maintaining investor relations.'
            ]
        }
    ]

    return (
        <div className='w-[85%] mx-auto pt-6 lg:pt-2'>
            <div className='founders text-xl'>
                <h1 className=''>FOUNDERS</h1>
            </div>
            <div className='grid lg:grid-cols-2 border'>
                {
                    founder.map((data) => {
                        return (
                            <div className='grid grid-cols-6 border'>
                                <div className='border col-span-2 lg:col-span-1 p-1'>
                                    <img src={data.image} alt="" className='h-[110px] w-[100px] rounded-[50%] border' />
                                </div>
                                <div className='border col-span-4 lg:col-span-5 p-2'>
                                    <h2 className='text-2xl font-bold mb-2'>{data.name}</h2>
                                    <h4 className='text-1xl font-bold mb-2'>{data.designation}</h4>
                                    {
                                        data.description?.map((d) => {
                                            return (
                                                <p className='text-[12px] lg:text-[15px] mb-2'>{d}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Founders;