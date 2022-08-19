import React from 'react'
import { useState } from 'react'
import AddTweet from './HomeScreen/AddTweet'
import Left from './HomeScreen/Left'
import {ViewTweet,PlaceHolder} from './HomeScreen/ViewTweet'

const Layout = () => {
  const [isDark,setIsDark] = useState(false)
  const handleIcon = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="container flex gap-8 dark:bg-black h-full  px-5 ">
        <div className="w-1/4 fixed top-0">
             <Left isDarkMode={isDark}/>
        </div>
        <div className="w-2/4  dark:text-gray-300 ml-96 ">
            <AddTweet isDarkMode={() => handleIcon()}/>
            <div className="flex flex-col gap-4">
            <ViewTweet isDarkMode={isDark}/>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>
            <PlaceHolder/>

            <img src="https://img.icons8.com/ios/50/000000/spinner-frame-5.png" width="50px" className='mx-auto animate-spin'/>
            </div>
            
        </div>
        <div className="w-1/4 bg-red-200 dark:bg-gray-700 dark:text-gray-300">

        </div>

    </div>
  )
}

export default Layout