import React from 'react'
import { useState } from 'react'
import AddTweet from './HomeScreen/AddTweet'
import Left from './HomeScreen/Left'
import ViewTweet from './HomeScreen/ViewTweet'

const Layout = () => {
  const [isDark,setIsDark] = useState(false)
  const handleIcon = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="container flex gap-8 dark:bg-black  px-5 ">
        <div className="w-1/4 fixed top-0">
             <Left isDarkMode={isDark}/>
        </div>
        <div className="w-2/4 bg-slate-400 dark:bg-gray-700 dark:text-gray-300 ml-96 ">
            <AddTweet isDarkMode={() => handleIcon()}/>
            <ViewTweet isDarkMode={isDark}/>
            <ViewTweet isDarkMode={isDark}/>
            <ViewTweet isDarkMode={isDark}/>
            <ViewTweet isDarkMode={isDark}/>
            <ViewTweet isDarkMode={isDark}/>
            <ViewTweet isDarkMode={isDark}/>
            <ViewTweet isDarkMode={isDark}/>
            
        </div>
        <div className="w-1/4 bg-red-200 dark:bg-gray-700 dark:text-gray-300">

        </div>

    </div>
  )
}

export default Layout