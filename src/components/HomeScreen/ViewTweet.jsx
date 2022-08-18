import React, { useState } from 'react'
import viewTweetIcon from '../../Data/viewTweetIcon'


const IconList = () => {
    const [activeComment,setActiveComment] = useState(false)
    const [activeRetweet,setActiveRetweet] = useState(false)
    const [activeLike,setActiveLike] = useState(false)
    const [activeShare,setActiveShare] = useState(false)
    
    return(
        <div className="flex justify-between mr-28 py-4 ">
                <div className="flex items-center hover:text-blue-600" onClick={() => setActiveComment(!activeComment)} >
                    <div className="rounded-full h-7  w-7 hover:bg-blue-100 hover:rounded-full p-1 " >
                        { !activeComment && viewTweetIcon[0].inActive}
                        { activeComment && viewTweetIcon[0].active}
                    </div>
                    <div className={"text-sm ml-3 " + (activeComment? 'text-blue-600' : '')}>
                        {viewTweetIcon[0].count}
                    </div>
                </div>
                <div className="flex items-center hover:text-green-600" onClick={() => setActiveRetweet(!activeRetweet)}>
                    <div className="rounded-full h-7 w-7 hover:bg-green-200 hover:rounded-full p-1 " >
                        { !activeRetweet && viewTweetIcon[1].inActive}
                        { activeRetweet && viewTweetIcon[1].active}
                    </div>
                    <div className={"text-sm ml-3 text-" + (activeRetweet? 'green-600' : '')}>
                        {viewTweetIcon[1].count}
                    </div>
                </div>
                <div className="flex items-center hover:text-red-600" onClick={() => setActiveLike(!activeLike)}>
                    <div className="rounded-full h-7 w-7 hover:bg-red-200 hover:rounded-full p-1" >
                        { !activeLike && viewTweetIcon[2].inActive}
                        { activeLike && viewTweetIcon[2].active}
                    </div>
                    <div className={"text-sm ml-3 text-" + (activeLike? 'red-600' : '') }>
                        {viewTweetIcon[2].count}
                    </div>
                </div>
                <div className="flex  items-center " onClick={() => setActiveShare(!activeShare)}>
                    <div className="rounded-full h-7 w-7 hover:bg-blue-100 hover:rounded-full p-1" >
                        { !activeShare && viewTweetIcon[3].inActive}
                        { activeShare && viewTweetIcon[3].active}
                    </div>
                   
                </div>
         </div>
    )
}
const IconListIsDark = () =>{
    const [activeComment,setActiveComment] = useState(false)
    const [activeRetweet,setActiveRetweet] = useState(false)
    const [activeLike,setActiveLike] = useState(false)
    const [activeShare,setActiveShare] = useState(false)

    return(
      
        <div className="flex justify-between mr-28 py-4 ">
                <div className="flex items-center hover:text-blue-600 " onClick={() => setActiveComment(!activeComment)} >
                    <div className="rounded-full h-7  w-7  dark:hover:bg-blue-200 hover:rounded-full p-1 " >
                        { !activeComment && viewTweetIcon[0].isDark}
                        { activeComment && viewTweetIcon[0].active}
                        
                    </div>
                    <div className={"text-sm ml-3 " + (activeComment? 'text-blue-600' : '')}>
                        {viewTweetIcon[0].count}
                    </div>
                </div>
                <div className="flex items-center hover:text-green-600" onClick={() => setActiveRetweet(!activeRetweet)}>
                    <div className="rounded-full h-7 w-7 hover:bg-green-200 hover:rounded-full p-1 " >
                        { !activeRetweet && viewTweetIcon[1].isDark}
                        { activeRetweet && viewTweetIcon[1].active}
                       
                    </div>
                    <div className={"text-sm ml-3 text-" + (activeRetweet? 'green-600' : '')}>
                        {viewTweetIcon[1].count}
                    </div>
                </div>
                <div className="flex items-center hover:text-red-600" onClick={() => setActiveLike(!activeLike)}>
                    <div className="rounded-full h-7 w-7 hover:bg-red-200 hover:rounded-full p-1" >
                        { !activeLike && viewTweetIcon[2].isDark}
                        { activeLike && viewTweetIcon[2].active}
                    </div>
                    <div className={"text-sm ml-3 text-" + (activeLike? 'red-600' : '') }>
                        {viewTweetIcon[2].count}
                    </div>
                </div>
                <div className="flex  items-center " onClick={() => setActiveShare(!activeShare)}>
                    <div className="rounded-full h-7 w-7 hover:bg-blue-100 hover:rounded-full p-1" >
                        { !activeShare && viewTweetIcon[3].isDark}
                        { activeShare && viewTweetIcon[3].active}
                    </div>
                   
                </div>
         </div>
    )
    
}
const ViewTweet = ({isDarkMode}) => {
   
  return (
    <div className="flex bg-white dark:bg-black dark:border-gray-800 border border-gray-200  border-t-0 justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer">
        <img src="https://picsum.photos/70/70" alt="profile" className='rounded-full h-12 w-12 mt-2' />
            <div className="ml-4 mt-1">
                <h5 className='font-semibold'><span className='hover:underline cursor-pointer'>Additya kumar</span> <span className='text-gray-500 ml-1'>@Aaditya288282</span> </h5>
                <div className='text-base'>नन्द के आनंद भयो, जय कन्हैया लाल की 🎉
                        कृष्‍ण जन्‍माष्‍टमी की शुभकामनाएं!! 🦚
                        नन्द के आनंद भयो, जय कन्हैया लाल की 🎉
                        कृष्‍ण जन्‍माष्‍टमी की शुभकामनाएं!!
                        
                        
                </div>
                <h6 className='text-blue-500 hover:underline cursor-pointer text-sm font-sans'>Translate tweet</h6>
               {
                !isDarkMode &&  <IconList  /> 
               }
               {
                isDarkMode &&  <IconListIsDark  /> 
               }
            </div>
           
        <div className="text-3xl font-sans text-black cursor-pointer">
            ...
        </div>
    </div>
  )
}

export default ViewTweet