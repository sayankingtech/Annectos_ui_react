import React, { useEffect } from 'react'
import './NewsLetterCom.css'

const NewsLetterCom: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="w-[80%] mx-auto mt-5 text-[#474343]">
            <div className='news_letter text-lg font-bold'>
                <h1 className='tracking-[1px]'>ANNECTOŚ INSIGHTS</h1>
            </div>
            <div className='font-md text-[16px]'>
                <h3 className="text-[23px] font-semibold mb-1 tracking-[1px]">Volume One : FY21-Q1</h3>
                <p className="">
                    Download Fy21-Q1 Insight
                </p>
                <p className="mb-2 text-justify">
                    As we all navigate through these unprecedented times and the significant challenges posed by the Covid-19 pandemic, we at annectoś have been in constant dialogue with different levels of channel partners to understand the issues faced by them. We have also tried to understand the big picture in terms of the impact of the pandemic on the Indian economy as well as some of the key industries like steel, cement, paints, electrical and other construction materials that are heavily dependent on traditional distribution channels for their sales.
                </p>
                <p className="mb-2 text-justify">
                    It is a privilege to share the first issue of a quarterly newsletter that captures this big picture along with some of the key pointers for persons engaged in leading and managing their sales and distribution arms. The newsletter covers the following avenues:
                </p>
            </div>
            <div className='font-md text-[16px]'>
                <h3 className="text-[23px] font-semibold mb-1 tracking-[1px]">Macro Meter:</h3>
                <p className="mb-2 text-justify">
                    A quick glance at the key macro-economic indicators during Q1 of FY21 : How bad was the first quarter for our economy? Will we see a quick recovery?
                </p>
            </div>
            <div className='font-md text-[16px]'>
                <h3 className="text-[23px] font-semibold mb-1 tracking-[1px]">
                    Industry Pulse – Infrastructure and Construction Industries:</h3>
                <p className="mb-2 text-justify">
                    Performance during Q1 of FY21 and outlook : What was the decline in sales and profitability for some key industries like steel, cement, paints and other construction materials and what to expect going forward.
                </p>
            </div>
            <div className='font-md text-[16px]'>
                <h3 className="text-[23px] font-semibold mb-1 tracking-[1px]">Channelonomyx – Channel Dynamics:</h3>
                <p className="mb-2 text-justify">
                    While there have been two distinct approaches by companies, one that has tried to cut losses while the other that has been proactive and has increased its engagement with its channel partners, we look at some pointers that are critical at this juncture to build strong loyalty between the brand and its channel partners.
                </p>
                <p className="mb-2 text-justify">
                    We would be delighted to have your feedback so that we could work towards making this newsletter more focused and insightful to you.
                </p>
            </div>

            <button
                className="border-r-2 border-r-black border-b-2 border-b-black border-l-2 border-l-gray-400 border-t-2 border-t-gray-400 px-1 py-[2px] mb-4 mt-2 font-md text-[16px] active:border-l-2 active:border-l-black active:border-t-2 active:border-t-black active:border-r-2 active:border-r-gray-400 active:border-b-2 active:border-b-gray-400  cursor-pointer">
                Download Fy21-Q1 Insights
            </button>
        </div>
    )
}

export default NewsLetterCom