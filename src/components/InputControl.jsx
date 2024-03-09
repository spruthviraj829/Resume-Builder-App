import React from 'react'

const InputControl = ({lable , ...props}) => {
  return (
    <div className='flex flex-col gap-2 mb-4 w-full px-2  '>
          { lable && <lable className='text-left text-[1rem]'>{lable}</lable>}
          <input type="text" {...props} 
        //   placeholder='Enter section title'
          className='outline-1 outline-slate-400 border rounded-md placeholder:text-[1rem] p-2' />
    </div>
  )
}

export default InputControl
