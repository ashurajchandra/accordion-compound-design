import React,{createContext, useContext, useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {AccordionContext,AccordionItemContext} from './AccordionContext';
import './Accordion.css'

export const AccordionPanel = ({children})=>{
    const {activePanel,setActivePanel} = useContext(AccordionContext)
    const {id} = useContext(AccordionItemContext);
    console.log("panel",children)
    console.log("checking-id", activePanel.id,id, activePanel.id==id, activePanel)
    return (
        (activePanel.id===id && activePanel.open ==true) && <p className='description'>
        {children}
        </p>
    )
}

export const AccordionToggle = ({children})=>{
    console.log("toggle",children)
    const {activePanel, setActivePanel} = useContext(AccordionContext)
    const {id} = useContext(AccordionItemContext);
    console.log("toggle-id",id)
    return(
        <div className='Accordion-heading'>
        <h3 >{children} 
        {/* <span onClick={setOpen(!open)}>{open?ExpandLessIcon:<ExpandMoreIcon/>}</span> */}
        </h3>
        <div onClick={()=>{setActivePanel({...activePanel, id:id,open:!activePanel.open})}}>{activePanel.open && activePanel.id==id?<ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
        </div>
    )
}

export const AccordionItem = ({id,children})=>{
    console.log("item-children",children)
    console.log("id",id)
return(
    <AccordionItemContext.Provider value={{id}}>
      <div className='wrapper' id={id}>
    {children}
</div>
    </AccordionItemContext.Provider>
)
}

export const Accordion = ({children})=>{
    const [activePanel, setActivePanel] = useState({id:'',open:false});
    return(
        <AccordionContext.Provider value={{activePanel, setActivePanel}}>
         <>
         {children}
         </>
        </AccordionContext.Provider>
    )
}
