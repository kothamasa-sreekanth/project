import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return(
    <div className='relative w-screen h-screen overflow-hidden'>
       <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')" }} 
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
export default Layout;