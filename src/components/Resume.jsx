import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { CiLink } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";

const Resume =forwardRef( (props,ref) => {


  const information = props.information;
  const sections = props.sections
  const info ={
    workExp : information[sections.workExp],
    project : information[sections.project],
    education : information[sections.education],
    achievements : information[sections.achievements],
    basciInfo : information[sections.basicInfo],
    summary : information[sections.summary],
    other :information[sections.other]
  }

    const [columns , setColumns] = useState( [[], []])
    const [source , setSource]= useState("")
    const [target , setTarget]=useState("")

    const workExpeSection =(
      <div key={"workexp"} 
      draggable 
      onDragOver={()=>setTarget("workExpeSection")}
      onDragEnd={()=> setSource("workExpeSection")}
      className='w-full mb-2 min-h-[150px]'>
          <div className=' text-2xl text-left font-bold'> {info.workExp.sectionTitle}</div>
          <div className='bg-black h-[2px] w-full'></div>
          {
            info.workExp?.details?.map((item)=>(
              <div className='text-left p-2' key={item.role}>
                <div>
                  {
                    item.role &&  <p className='text-[1.2rem] font-semibold capitalize'>{item.role}</p>
                  }
                  {
                    item.companyName &&<p className='color font-semibold capitalize'>{item.companyName}</p>
                  }
                  {
                    item.certificationLink &&  <a href={item.certificationLink} className='flex items-center color'><CiLink className='font-bold'/>Certificate Link</a> 
                  }
                    
                </div>

              {
                item.startDate && item.endDate && <div className='flex items-center'>
                <MdDateRange /> {item.startDate} - {item.endDate}
                </div>
              }
              {
                item.location &&  <a href="" className='flex items-center capitalize'> <IoLocation />{item.location}</a>
              }

                  {
                    item.points?.length >0 &&  <ul className='text-left p-2'>
                          {
                            item.points?.map((point,index)=>( <li key={index}> - {point}</li>))
                          }
                          </ul>
                  }  
                      
              </div>
            ))
          }      
      </div>
    );


    const projectSection =(
      <div key={"project"}
      draggable 
      onDragOver={()=>setTarget("projectSection")}
      onDragEnd={()=> setSource("projectSection")}
      className='w-full min-h-[150px]' >
          <div className=' text-2xl text-left font-bold '>{info.project.sectionTitle}</div>
          <div className='bg-black h-[2px] w-full'></div>
              {
                info.project?.details?.map((item)=>(
                  <div className='text-left p-2' key={item.statement}>           
                      <div>
                      {item.statement &&  <p className='text-[1.2rem] font-semibold'>{item.statement}</p>}
                        {item.deployedLink &&<a href={item.deployedLink} className=' color flex items-center'><CiLink />Deployed Link</a> }
                      {item.githubLink &&  <a href={item.githubLink} className='color flex items-center'><LuGithub />github Link</a>}             
                    </div>

                    {item.overview && <p> {item.overview} </p>}
                  
                    {
                    item.points?.length >0 &&  <ul className='text-left p-2'>
                          {
                            item.points?.map((point,index)=>( <li key={index}>{point}</li>))
                          }
                          </ul>
                  }  
                
                </div>
                ))
              }
          
      </div>
    );


    const educationSection =(
      <div key={"education"}
      draggable 
      onDragOver={()=>setTarget("educationSection")}
      onDragEnd={()=> setSource("educationSection")}
      className='w-full min-h-[150px]'>
          <div className=' text-2xl text-left font-bold '> {info.education?.sectionTitle}</div>
          <div className='bg-black h-[2px] w-full'></div>
          {
            info.education?.details?.map((item)=>(
              <div className='text-left p-2'>
                        {item.class && <div className='text-[1.2rem] font-semibold'>{item.class}</div>}
                        {item.college && <p className='color'>{item.college}</p>}
                        {
                          item.startDate && item.endDate && <div className='flex items-center'>
                          <MdDateRange /> {item.startDate} - {item.endDate}
                          </div>
                        }
                </div>
            ))
          }

          
      </div>
    );



    const achivementSection =(
      <div key={"achivement"}
      draggable 
      onDragOver={()=>setTarget("achivementSection")}
      onDragEnd={()=> setSource("achivementSection")}
      className='w-full min-h-[150px]'>
          <div className=' text-2xl text-left font-bold'>{info.achievements?.sectionTitle}</div>
          <div className='bg-black h-[2px] w-full'></div>
          {
              info.achievements?.points?.points?.length >0 &&  <ul className='text-left p-2'>
                  {
                    info.achievements?.points?.points.map((point ,index)=>( <p key={index} >-{point}</p>))
                  }
            </ul>
                  }  
                
      </div>
    );


    const summarySection =(
      <div key={'summary'}
      draggable 
      onDragOver={()=>setTarget("summarySection")}
      onDragEnd={()=> setSource("summarySection")}
      className='w-full'>
          <div className=' text-2xl text-left font-bold'> {info.summary.sectionTitle}</div>
          <div className='bg-black h-[2px] w-full'></div>

          {info.summary?.sdetail &&  <div className='text-left p-2'>{info.summary.sdetail}</div>}
      </div>
    );

    const otherSection =(
      <div key={'other'}
      draggable 
      onDragOver={()=>setTarget("otherSection")}
      onDragEnd={()=> setSource("otherSection")}
      style={{ display: info.other?.sectionTitle ? '' : 'none' }}
      className='w-full'>
          <div className=' text-2xl text-left font-bold'> {info.other?.sectionTitle}</div>
          <div className='bg-black h-[2px] w-full'></div>
          {info.other?.detail && <div className='text-left p-2'> {info.other?.detail}</div>}
      </div>
    );

   const containerRef=useRef()

  useEffect(()=>{
    const container = containerRef.current;
    if(!props.activeColor) return;
    container.style.setProperty("--color" , props.activeColor)
  } ,[props.activeColor])

  function swapSouceTarget(source , target){
    if(!source || !target) return;
    const tempCloumns = [[...columns[0]] , [...columns[1]]]
    let sourceRowIndex =tempCloumns[0].findIndex((item)=> item===source) 
    let sourceColumIndex = 0;
    if(sourceRowIndex < 0) {
      sourceColumIndex =1;
       sourceRowIndex =tempCloumns[1].findIndex((item)=> item===source)
    }

    let targetRowIndex =tempCloumns[0].findIndex((item)=> item===target) 
    let targetColumIndex = 0;
    if(targetRowIndex < 0) {
      targetColumIndex =1;
       targetRowIndex =tempCloumns[1].findIndex((item)=> item===target)
    }
    
    const tempSource= tempCloumns[sourceColumIndex][sourceRowIndex]
    tempCloumns[sourceColumIndex][sourceRowIndex] = tempCloumns[targetColumIndex][targetRowIndex]
    tempCloumns[targetColumIndex][targetRowIndex] =tempSource

    setColumns(tempSource)
  }

    useEffect(()=>{
       swapSouceTarget(source , target)
    },[source])

    useEffect(()=>{
      setColumns([
        [projectSection , educationSection , summarySection],
        [workExpeSection , achivementSection ,otherSection]
      ]) 
    },[information])


  return (
    <div ref={ref}>
      <div className='container min-w-[842px] min-h-[1190px] h-fit shadow-lg border p-12 '
        ref={containerRef}>
            <div className=' mr-10 text-left '>
            {/* <p className='text-3xl font-semibold'>{info?.basciInfo?.detail?.name}</p> */}
                {info.basciInfo?.detail?.name &&  
                   <p className='text-3xl font-semibold capitalize'>{info?.basciInfo?.detail?.name}</p> || 
                   <p className='text-3xl font-semibold'>Name</p>
                  }
                {info.basciInfo?.detail?.title &&  
                  <p className='capitalize color font-semibold'>{info?.basciInfo?.detail?.title}</p> ||
                  <p className='capitalize color font-semibold'>title</p>
                 }

                 <div className='flex  flex-wrap gap-4 mt-4'> 
                 {info.basciInfo?.detail?.email &&  
                      <a href="" className='flex items-center gap-2'> <MdAlternateEmail className='color'/>{info.basciInfo?.detail?.email}</a> ||
                      <a href="" className='flex items-center gap-2'> <MdAlternateEmail className='color'/>Email</a>
                   }       
                 {info.basciInfo?.detail?.phone && 
                  <a href="" className='flex items-center gap-2'><FaPhone className='color' />{info.basciInfo?.detail?.phone}</a> ||
                  <a href="" className='flex items-center gap-2'><FaPhone className='color' />Phone Number</a>
                   }
                {info.basciInfo?.detail?.github && 
                 <a href={info.basciInfo?.detail?.github} className='flex items-center gap-2'><FaGithub className='color'/>github</a> ||
                 <a href="" className='flex items-center gap-2'><FaGithub className='color'/>github</a>
                 }
                 {info.basciInfo?.detail?.linkdin && 
                 <a href={info.basciInfo?.detail?.linkdin} className='flex items-center gap-2'><FaLinkedin className='color' />linkdIn</a> ||
                 <a href=" " className='flex items-center gap-2'><FaLinkedin className='color' />linkdIn</a>
                 }                                                                                                                        
                 </div>
            </div>


           <div className='flex mt-6 gap-7 '>
               <div className='flex flex-col gap-4 items-start  w-full'>
                  {
                    columns[0]
                  }
              </div>
               <div className='flex flex-col gap-4 items-start  w-full'>
               {
                    columns[1]
                  }
              </div>
           </div>
    </div>

    </div>
  )
})

export default Resume
