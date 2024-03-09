  import React, { useEffect, useRef, useState } from 'react'
  import { FaArrowDown } from "react-icons/fa";
  import Editor from './Editor';
  import Resume from './Resume';
   import ReactToPrint from 'react-to-print';

 const Body = () => {

    const colors = ["#239ce2", "#48bb78", "#0bc5ea" ,"#a0aec0", "#ed8936"];
    const sections= {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achivements",
        summary: "Summary" ,
        other: "Other"
    };
 
  const [resumeInfo ,setResumeInfo] = useState({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {},
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: [],
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: [],
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: [],
      },
      [sections.achievements]: {
        id: sections.achievements,
        sectionTitle: sections.achievements,
        points: [],
      },
      [sections.summary]: {
        id: sections.summary,
        sectionTitle: sections.summary,
        sdetail: "",
      },
      [sections.other]: {
        id: sections.other,
        sectionTitle: sections.other,
        detail: "",
      },
    })
  
    const [activeColor , setActiveColor] = useState(colors[0])
    const resumeRef =useRef()

    useEffect(()=>{
    console.log(resumeInfo)
    },[resumeInfo])

   console.log(activeColor)

  return (
    // container 
    <div className='flex flex-col gap-8 p-8 text-center pt-0'> 
        <p className='font-semibold  text-[2.1rem]'>
            Resume Builder
        </p>
     
        {/* toolbar */}
        <div className='w-[100%] flex gap-8 justify-between items-center'>
             <div className='flex gap-4'>
               {
                colors.map((item)=>(
                    <span key={item}
                     className={`w-9 h-9  rounded-full ${activeColor === item ? "active": ""}`}  
                     onClick={()=>setActiveColor(item)}
                     style={{background : item, } }></span>
                ))
               }
             </div>
             <ReactToPrint
                  trigger={() => {
                    return  <button className='p-2  flex text-center items-center gap-1 bg-blue-400 rounded-md text-white font-medium w-auto'>
                    <div>Download</div>
                    <div><FaArrowDown /></div>
                     </button>;
                  }}
                  content={() => resumeRef.current}
        />
            {/* <button className='p-2  flex text-center items-center gap-1 bg-blue-400 rounded-md text-white font-medium w-auto'>
                <div>Download</div>
                <div><FaArrowDown /></div>
            </button> */}
        </div>

        <div className='flex gap-6'>
            <Editor sections={sections} information={resumeInfo} setInformation={setResumeInfo}/>
            <Resume ref={resumeRef} sections={sections} information={resumeInfo} activeColor={activeColor}/>
         </div>
    </div>
  )
}

export default Body
