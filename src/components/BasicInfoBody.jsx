import React from 'react'
import InputControl from './InputControl'

const BasicInfoBody = () => {
  return (
    <div>
      <div>
            <InputControl 
                      lable="Name :"
                      placeholder='Enter your full name'
            />
            <InputControl 
                      lable="Title :"
                      placeholder='Enter youe title eg. Frontend developer'
            />
       </div>
      
     <div>
        <InputControl 
                    lable="Linkdin Link :"
                    placeholder='Enter your linkdin profile link'
          />
        <InputControl 
                lable="Github Link :"
                placeholder='Enter your gitHub profile link'
        />
     </div>

    <div>
    <InputControl 
                lable="Email :"
                placeholder='Enter your email'
                type = 'email'
       />
     <InputControl 
                lable="Enter Phone :"
                placeholder='Enter your phone number'
       />
    </div>
    </div>
  )
}

export default BasicInfoBody
