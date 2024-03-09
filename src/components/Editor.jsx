import React, { useEffect, useState } from 'react'
import InputControl from './InputControl'
// import BasicInfoBody from './BasicInfoBody'
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";


const Editor = ({sections ,information ,setInformation}) => {

      const [activeSectionkey ,setActiveSectionkey] = useState(Object.keys(sections)[0])
      let basicInfo = 'basicInfo';

      const [activeInformation ,setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]] 
      )
       
   const [activeDetailIndex ,setActiveDetailIndex]=useState(0)

      const [values , setValues] = useState(
        {
          name : activeInformation?.detail?.name || "",

          title: activeInformation?.detail?.title|| "",

          linkdin: activeInformation?.detail?.linkdin ||"",

          github: activeInformation?.detail?.github ||"",
          email: activeInformation?.detail?.email ||"",
          phone: activeInformation?.detail?.phone ||"",
          // points :activeInformation?.details?.points?.point[activeInformation?.details?.points]
          // points: []
        }
      )

      const [sectionTitle , setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
      )

      useEffect(()=>{
       setActiveInformation(information[sections[activeSectionkey]])
       setSectionTitle(sections[activeSectionkey])
        setActiveDetailIndex(0);

       setValues({
            name : activeInformation?.detail?.name ||"" ,

            title:  activeInformation?.detail?.title || "" ,
                           
            role:activeInformation?.details ?
                  activeInformation?.details[0]?.role ||"" :'',
            
            statement:activeInformation?.details ?
                     activeInformation?.details[0]?.statement ||"" :'',
            
            class:activeInformation?.details ?
                  activeInformation?.details[0]?.class  ||"":'',


            linkdin: activeInformation?.detail?.linkdin ||"" ,
            github: activeInformation?.detail?.github ||"",
            email: activeInformation?.detail?.email ||"" ,
            phone: activeInformation?.detail?.phone ||"" ,

            overview:activeInformation?.details ? 
            activeInformation?.details[0]?.overview ||"":"",

            certificationLink:activeInformation?.details?
            activeInformation?.details[0]?.certificationLink ||"": "",

            deployedLink:activeInformation?.details?
            activeInformation?.details[0]?.deployedLink ||"":"",

            githubLink: activeInformation?.details?
            activeInformation?.details[0]?.githubLink ||"": "",

            startDate:activeInformation?.details?
            activeInformation?.details[0]?.startDate ||"":"",

            endDate:activeInformation?.details?
            activeInformation?.details[0]?.endDate ||"":"",

            location:activeInformation?.details?
            activeInformation?.details[0]?.location ||"" :"",
             
            // points : []
            points: Array.isArray(activeInformation?.details?.[0]?.points)
            ? [...activeInformation.details[0].points] ||[]
            : Array.isArray(activeInformation.points)
            ? [...activeInformation.points] || []
            : [],
        
            companyName:activeInformation?.details?
            activeInformation?.details[0]?.companyName ||"":"",

           college: activeInformation?.details?
           activeInformation?.details[0]?.college ||"":"",

            summary : typeof activeInformation?.sdetail !=Object ? activeInformation?.sdetail ||"" : "" ,
            other : typeof activeInformation?.detail !=Object ? activeInformation?.detail || '' : "",
         })
        
      },[activeSectionkey])


      useEffect(()=>{
          const details = activeInformation?.details
          if(!details) return ;
          setValues({

            role:activeInformation?.details ?
                  activeInformation?.details[activeDetailIndex]?.role || "" :'',    
            statement:activeInformation?.details ?
                  activeInformation?.details[activeDetailIndex]?.statement ||"" :'',           
            class:activeInformation?.details ?
                  activeInformation?.details[activeDetailIndex]?.class ||"" :'',
            overview:activeInformation?.details ? 
                  activeInformation?.details[activeDetailIndex]?.overview ||"":"",  
           certificationLink:activeInformation?.details?
                  activeInformation?.details[activeDetailIndex]?.certificationLink ||"": "",   
           deployedLink:activeInformation?.details?
                  activeInformation?.details[activeDetailIndex]?.deployedLink ||"":"",  
           githubLink: activeInformation?.details?
                  activeInformation?.details[activeDetailIndex]?.githubLink ||"" : "",   
           startDate:activeInformation?.details?
                  activeInformation?.details[activeDetailIndex]?.startDate ||"":"",   
           endDate:activeInformation?.details?
                 activeInformation?.details[activeDetailIndex]?.endDate ||"":"",     
           location:activeInformation?.details?
                  activeInformation?.details[activeDetailIndex]?.location ||"":"",
           companyName:activeInformation?.details?
                  activeInformation?.details[activeDetailIndex]?.companyName ||"":"",     
           college: activeInformation?.details?
                 activeInformation?.details[activeDetailIndex]?.college ||"":"",
          points: Array.isArray(activeInformation?.details?.[activeDetailIndex]?.points)
                 ? [...activeInformation.details[activeDetailIndex].points]
                 : Array.isArray(activeInformation.points)
                 ? [...activeInformation.points]
                 : [],
          })
      },[activeDetailIndex])



// console.log(information)

  function changeHandler (event ){
      const {name ,value} = event.target

      setValues((prev)=>(
       { ...prev , 
        [name] : value}
      ))
  }
const pointChangeHandler= (value , index  )=>{
      // const {value} = event.target;
      // console.log(index)
      const temp ={...values}
      temp.points[index] = value;
      setValues(temp)
}

function handelSubmition(){

     switch(sections[activeSectionkey]){
            case  sections.basicInfo :{
                    const temp = {
                      name : values.name,
                      title : values.title,
                      linkdin: values.linkdin,
                      github : values.github,
                      email : values.email,
                      phone: values.phone
                    }
                setInformation((prev)=>(
                    {
                    ...prev ,
                      [sections.basicInfo] : {
                        ...prev[sections.basicInfo] ,
                        detail : temp,
                        sectionTitle :sectionTitle,
                      }
                   }
                ))
              break; }

                case  sections.workExp :{
                  const temp = {
                    certificationLink : values.certificationLink,
                    role : values.role,
                    companyName: values.companyName,
                    location : values.location,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    points : values.points
                  }
                const tempDetails = [...information[sections.workExp]?.details]
                tempDetails[activeDetailIndex] = temp;
                setInformation((prev)=>(
                  {
                  ...prev ,
                    [sections.workExp] : {
                      ...prev[sections.workExp] ,
                      details : tempDetails,
                      sectionTitle :sectionTitle,
                    }
                 }
              ))
              break; }

              case  sections.project :{
                const temp = {
                  overview : values.overview,
                  statement : values.statement,
                  deployedLink: values.deployedLink,
                  githubLink : values.githubLink,
                  points : values.points
                }
              const tempDetails = [...information[sections.project]?.details]
              tempDetails[activeDetailIndex] = temp;
              setInformation((prev)=>(
                {
                ...prev ,
                  [sections.project] : {
                    ...prev[sections.project] ,
                    details : tempDetails,
                    sectionTitle :sectionTitle,
                  }
               }
            )) 
            break;}
             
             case  sections.education :{
              const temp = {
                college : values.college,
                class : values.class,
                startDate: values.startDate,
                endDate: values.endDate,             
              }
            const tempDetails = [...information[sections.education]?.details]
            tempDetails[activeDetailIndex] = temp;
            setInformation((prev)=>(
              {
              ...prev ,
                [sections.education] : {
                  ...prev[sections.education] ,
                  details : tempDetails,
                  sectionTitle :sectionTitle,
                }
             }
           ))
           break; }

          case  sections.achievements :{
                const temp = {
                  points : values.points,
                  sectionTitle :sectionTitle
                }
              
              setInformation((prev)=>(
                {
                  ...prev ,
                    [sections.achievements] : {         
                     points : temp,
                     sectionTitle :sectionTitle,
                   }
              }
            )) 
            break;}

           case  sections.summary :{
              const temp =  values.summary;
               setInformation((prev)=>(
                  {
                  ...prev ,
                    [sections.summary] : {
                    
                      sdetail : temp,
                      sectionTitle :sectionTitle,
                    }
                }
              ))
              break; }

              case  sections.other:{
                const temp =values.other
                 setInformation((prev)=>(
                    {
                    ...prev ,
                      [sections.other] : {
                      
                        detail : temp,
                        sectionTitle :sectionTitle,
                      }
                  }
                ))
                break; }
              

     }
   
 
 }


 function handelAddNew(){
        const details = activeInformation?.details;
        const lastDetail = details.slice(-1)[0]
        console.log(Object.keys(lastDetail))
        if(!Object.keys(lastDetail).length) return;
        details?.push({})
        setInformation(prev=>(
          {...prev ,
            [sections.activeSectionkey]:
            {
              ...information[sections[activeSectionkey]] ,
                details : details ,
            }
          }))
        setActiveDetailIndex(details?.length-1)
      }

 function handelDeletDetail(index){
        const details = activeInformation?.details;
        if(!details) return;

        details.splice(index ,1)

        setInformation((prev)=>(
          {
            ...prev ,
            [sections[activeSectionkey]]:{
                  ...information[sections[activeSectionkey]] ,
                  details : details,
            }
          }
        ))
        setActiveDetailIndex((prev)=>( prev===index ? 0 : prev-1))
      }

  useEffect(()=>{
    setActiveInformation(information[sections[activeSectionkey]])
  },[information])



      const workBody= (
          <div className='w-full'>
                <div className='flex '>
                    <InputControl 
                    lable="Role :"
                    name="role"
                    value={values.role}
                    onChange={changeHandler}
                    placeholder='Enter title eg. Frontend developer'/>

                      <InputControl 
                    lable="Company Name :"
                    name="companyName"
                    value={values.companyName}
                    onChange={changeHandler}
                    placeholder='Enter compant name eg. amazon'/>
                </div>

                <div className='flex'>
                <InputControl 
                    lable="Certification Link :"
                    name="certificationLink"
                    value={values.certificationLink}
                    onChange={changeHandler}
                    placeholder='Enter certificate link'/>

                <InputControl 
                      lable="Location :"
                      name="location"
                      value={values.location}
                      onChange={changeHandler}
                      placeholder='Enter location eg. Remote'/>
                </div>

                <div className='flex'>
                <InputControl 
                      lable="Start Date :"
                      type ='date'
                      name="startDate"
                      value={values.startDate}
                      onChange={changeHandler}
                      placeholder='Enter start date of work'/>
                <InputControl 
                      lable="End Date :"
                      type ='date'
                      name="endDate"
                      value={values.endDate}
                      onChange={changeHandler}
                      placeholder='Enter end date of work'/>
                </div>

                <div>
                  <label className='text-left font-medium'>Enter Work description </label>
                  <InputControl placeholder='Line 1' 
                   onChange={(event)=>pointChangeHandler(event.target.value ,0 )} 
                   value={values.points ? values.points[0] || "" : ""} />
                  <InputControl placeholder='Line 2'  
                   onChange={(event)=>pointChangeHandler(event.target.value ,1 )}
                    value={values.points ? values.points[1]  || "": ""}/>
                  <InputControl placeholder='Line 3'  
                   onChange={(event)=>pointChangeHandler(event.target.value,2 )} 
                   value={values.points ? values.points[2] || "" : ""}/>
                  <InputControl placeholder='Line 4'  
                   onChange={(event)=>pointChangeHandler(event.target.value ,3 )}
                    value={values.points ? values.points[3] || "" : ""}/>
                </div>
          </div>
      )

      const projectBody=(
        <div>
            
            <div>
                <InputControl 
                          lable="Statement :"
                          value={values.statement}
                          name="statement"
                          onChange={changeHandler}
                          placeholder='Enter title eg. Chat app'
                  />
            </div>

            <InputControl 
                      lable="Overview :"
                      name="overview"
                      value={values.overview}
                      onChange={changeHandler}
                      placeholder='Enter basic overview of project'
            />

            <div className='flex'>
                <InputControl 
                          lable="Depvloyed Link :"
                          name="deployedLink"
                          value={values.deployedLink}
                          onChange={changeHandler}
                          placeholder='Enter deployed link of project'
                />
                <InputControl 
                      lable="Github Link :"
                      name="githubLink"
                      value={values.githubLink}
                      onChange={changeHandler}
                      placeholder='Enter github link of project'
              />
            </div>

            <div>
                <label className='font-medium'> Enter project description </label>
                <InputControl placeholder='Line 1' 
                   onChange={(event)=>pointChangeHandler(event.target.value ,0 )} 
                   value={values.points ? values.points[0] || "": ""} />
                  <InputControl placeholder='Line 2'  
                   onChange={(event)=>pointChangeHandler(event.target.value ,1 )}
                    value={values.points ? values.points[1] || "" : ""}/>
                  <InputControl placeholder='Line 3'  
                   onChange={(event)=>pointChangeHandler(event.target.value,2 )} 
                   value={values.points ? values.points[2] || "": ""}/>
                  <InputControl placeholder='Line 4'  
                   onChange={(event)=>pointChangeHandler(event.target.value ,3 )}
                    value={values.points ? values.points[3] || "": ""}/>
            </div>

        </div>
      )

      const educationBody =(
        <div>

          <div>
          <InputControl 
                      lable="Class :"
                      name="class"
                      value={values.class}
                      onChange={changeHandler}
                      placeholder='Enter title eg. B-tech HSC'
            />
          </div>
          <InputControl 
                      lable="College/School Name :"
                      name="college"
                      value={values.college}
                      onChange={changeHandler}
                      placeholder='Enter name of College/School'
            />

          <div className='flex'>
              <InputControl 
                          lable="Start Date :"
                          type ='date'
                          name="startDate"
                          value={values.startDate}
                          onChange={changeHandler}
                          placeholder='Enter start date '/>
              <InputControl 
                          lable="End Date :"
                          type ='date'
                          name="endDate"
                          value={values.endDate}
                          onChange={changeHandler}
                          placeholder='Enter end date '/>
          </div>

        </div>
      )

      const basicInfoBody = (
        <div>
            
            <div className='flex'>
                  <InputControl 
                            lable="Name :"
                            name="name"
                            value={values.name}
                            onChange={changeHandler}
                            placeholder='Enter your full name'
                  />
                  <InputControl 
                            lable="Title :"
                            name="title"
                            value={values.title}
                            onChange={changeHandler}
                            placeholder='Enter youe title eg. Frontend developer'
                  />
            </div>
            
          <div className='flex'>
              <InputControl 
                          lable="Linkdin Link :"
                          name="linkdin"
                          value={values.linkdin}
                          onChange={changeHandler}
                          placeholder='Enter your linkdin profile link'
                />
              <InputControl 
                      lable="Github Link :"
                      name="github"
                      value={values.github}
                      onChange={changeHandler}
                      placeholder='Enter your gitHub profile link'
              />
          </div>

          <div className='flex'>
          <InputControl 
                      lable="Email :"
                      name="email"
                      value={values.email}
                      onChange={changeHandler}
                      placeholder='Enter your email'
                      type = 'email'
            />
          <InputControl 
                      lable="Enter Phone :"
                      name="phone"
                      value={values.phone}
                      onChange={changeHandler}
                      placeholder='Enter your phone number'
            />
          </div>

        </div>
      )


      const achivementBody=(
        <div>
            
                  <label className=' font-medium'>List your achivements </label>
                  <InputControl placeholder='Line 1' 
                   onChange={(event)=>pointChangeHandler(event.target.value ,0 )} 
                   value={values.points ? values.points[0] || "": ""} 
                   />
                  <InputControl placeholder='Line 2'  
                   onChange={(event)=>pointChangeHandler(event.target.value ,1 )}
                    value={values.points ? values.points[1]|| "" : ""}
                    />
                  <InputControl placeholder='Line 3'  
                   onChange={(event)=>pointChangeHandler(event.target.value,2 )} 
                   value={values.points ? values.points[2] || "": ""}
                   />
                  <InputControl placeholder='Line 4'  
                   onChange={(event)=>pointChangeHandler(event.target.value ,3 )}
                    value={values.points ? values.points[3] || "" : ""}
                    />
            
        </div>
      )

      const summaryBody=(
        <div>
            <InputControl 
                      lable="Summary :"
                      name="summary"
                      value={values.summary}
                      onChange={changeHandler}
                      placeholder='Enter your summary'
            />
        </div>
      )

      const otherBody=(
        <div>
            <InputControl 
                      lable="Other :"
                      name="other"
                      onChange={changeHandler}
                      value={values.other}
                      placeholder='Enter something'
            />
        </div>
      )

// console.log(' printing section.basicInfo')
// console.log(sections.basicInfo)
// console.log('printin basic info')
// console.log(values)



      function generateBody(){
        switch (sections [activeSectionkey]){
          case sections.basicInfo :
          return basicInfoBody

          case sections.workExp :
          return workBody

          case sections.project :
          return projectBody

          case sections.education :
          return educationBody

              
          case sections.achievements :
          return achivementBody

          case sections.summary :
          return summaryBody

          case sections.other :
            return otherBody
          
        }

      }

 

// console.log(activeSectionkey)


  return (
    <div className='min-w-[550px] max-w-[720px]  min-h-[450px] h-max flex flex-col pt-1 p-1 gap-8 shadow-md'>
        <div className='flex w-full mx-auto gap-5 overflow-x-scroll border-b-2  '>
             {
                Object.keys(sections).map((key)=>{
                return <div>
                          <div className='p-3  cursor-pointer w-max'
                          key={key}
                          style={activeSectionkey === key ?{ color : '#239ce2'} : {}}
                          onClick={()=> setActiveSectionkey(key)}
                            >{sections[key] }</div>      
                              {
                                  activeSectionkey===key?
                                  <div className='h-[2px] bg-blue-500 w-full'></div> : ""
                              }                   
                     </div>
               })
             }

        </div>

        <div>
           <InputControl lable="Title" value={sectionTitle}
           onChange ={(event)=>{ setSectionTitle(event.target.value)}}
            ></InputControl>
            
            <div className='flex items-center gap-3 text-white'>
                 {
                    activeInformation?.details ?
                     (activeInformation?.details?.map((item ,index)=>(
                     <div
                          key={index}    
                         onClick={()=>setActiveDetailIndex(index)}
                         style={activeDetailIndex === index ?{ backgroundColor : '#239ce2'} : {}}
                         className=' flex items-center text-sm border rounded-full px-2 gap-2 bg-gray-500 cursor-pointer'>
                            <p>{sections[activeSectionkey]} {index+1}</p> 
                            <RxCross2 className='text-white font[10px]' 
                             onClick={(event)=>{
                              event.stopPropagation()
                               handelDeletDetail(index)
                               }} />
                     </div>)))
                     : ""
                }  

              {
                activeInformation?.details && 
                activeInformation?.details?.length > 0 ?
                 ( <div onClick={handelAddNew} className='text-blue-600 font-medium cursor-pointer'>+New</div>  )            
                : ""
              }           
            </div>

            {
              generateBody()
            }
              

             <button
               onClick={handelSubmition}
              className=' p-2 mb-6 w-[70px] bg-blue-400 rounded-md text-white font-medium active:translate-y-1 transition-all duration-200 '
              >Save</button>

        </div>
    </div>
  )
}

export default Editor;
