import React from 'react'
import AddTweet from './HomeScreen/AddTweet'
import Left from './HomeScreen/Left'

const Layout = () => {
  return (
    <div className="container flex gap-8  px-5 ">
        <div className="w-1/4 fixed top-0">
             <Left/>
        </div>
        <div className="w-2/4 bg-slate-400 ml-96 mt-5">
            <AddTweet/>
        </div>
        <div className="w-1/4 bg-red-200">

        </div>

    </div>
  )
}

export default Layout