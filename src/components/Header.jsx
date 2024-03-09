import React from 'react'

const Header = () => {
  return (
    // container
    <div className='p-8 text-center items-center  mx-auto gap-8 flex justify-evenly min-h-[85vh] headBg'>
        {/* heading  */}
       <div className='max-w-[500px]'>
            <p className='bg-black bg-clip-text text-transparent text-[3.5rem] font-bold  '>
               A <span className='text-blue-400'>Resume</span> that stand out! 
            </p>

            <p className='bg-black bg-clip-text text-transparent text-[3.5rem] font-bold'>
                Make your own resume. <span className='text-blue-400'>Its free</span>
            </p>
       </div>

       <div>
         <img src="/undraw_resume_folder_re_e0bi.svg" alt="" className='w-[400px] ' />
       </div>
    </div>
    
    
  )
}

export default Header
