import React from 'react'
import leftList from '../../Data/leftList'
const logo = <svg width="27" fill="skyblue" height="27" viewBox="0 0 24 24" aria-hidden="true" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
const SubItem = ({icon,name,icon2}) => {
    return (
        
        <div className="flex gap-4  cursor-pointer rounded-full  font-sans  ">
            <div className="hover:bg-gray-300 flex  gap-x-3.5 p-3 py-2.5 pr-16 mt-2.5 items-center  rounded-full ">
                <div className='' >
                    {icon2} 
                </div>
            
                 <div className="text-xl  ml-2 font-normal ">
                    {name}
                </div>
            </div>
        </div>
    )
}
const profileimage = "https://tinypng.com/images/social/website.jpg"

const FooterLeft = () => {
    return(
        <div className="flex  mt-10 items-center rounded-full p-3 gap-1 ">
            <img src={profileimage} alt="profile"  className='hover:bg-gray-300  w-12  h-12 rounded-full'/>
            <div className="ml-3 ">
                <div className="name text-sm mt-1 font-sans font-semibold">Aaditya kumar</div>
                <div className="name text-sm font-sans font-semibold text-gray-500">@Aaditya288282</div>
            </div>
            <div className="ml-3 font-bold text-2xl mb-1">
                ...
            </div>
        </div>
    )
}

const Left = () => {
  return (
    
   <div className="px-10  ml-20 mt-1">
        <div className=" mt-3 px-2.5 cursor-pointer mb-2 ">
            {logo}
        </div>
        {
            leftList.map((item,index) => (
                <SubItem icon={item.active} icon2={item.inActive} name={item.name} key={index} />
            ))
        }
        <div className="bg-blue-500 text-lg font-bold hover:bg-blue-600 text-white items-center  text-center cursor-pointer rounded-full py-3.5 mt-3  ">
            Tweet
        </div>
    <FooterLeft />
</div>

  )
}

export default Left