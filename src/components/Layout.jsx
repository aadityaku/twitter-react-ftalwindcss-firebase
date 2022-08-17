import React from 'react'
import Left from './HomeScreen/Left'

const Layout = () => {
  return (
    <div className="container flex gap-8  px-5 ">
        <div className="w-1/4 ">
             <Left/>
        </div>
        <div className="w-1/2 bg-slate-400">

        </div>
        <div className="w-1/4 bg-red-200">

        </div>

    </div>
  )
}

export default Layout