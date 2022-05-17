import React from 'react'
import { VscLiveShare,VscGithubInverted,VscClose} from "react-icons/vsc";

const Popop = ({popup, handleshow}) => {

  return (
    <div className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0">
    <div className="bg-blue-450 opacity-50 h-screen w-screen fixed top-0 left-0 right-0 bottom-0" onClick={handleshow}></div>
        <div className="bg-white text-center absolute top-0 left-0 w-6/12 h-auto transform flex flex-col items-center justify-center gap-2 mt-1 ml-p25 rounded p-2 mb-8">
        <div className="w-full flex place-content-end mr-1 text-3xl text-myred">
            <span onClick={handleshow}><VscClose/></span>  
        </div>
          <div className="w-full">
            <img src={popup[0].popupDescription.imageSrc} alt="" className="w-full h-full rounded"/>
          </div>
          <div className="flex w-full place-content-between">
            <h1 className="ml-4 font-bold text-xl">{popup[0].popupDescription.titre}</h1>
            <p className="flex gap-4 mr-4">
              <a href={popup[0].popupDescription.demoLink} className="bg-primary w-28 flex gap-2 items-center place-content-center text-white rounded">See Live<VscLiveShare/></a>
              <a href={popup[0].popupDescription.source} className="bg-primary w-28 flex gap-2 items-center place-content-center placeholder text-white rounded">See Source<VscGithubInverted/> </a>
            </p>
          </div>
              <ul className="flex w-full place-content-start gap-2 ml-4">
                <li className="bg-primary rounded p-1 text-white text-xs text-center"> {popup[0].popupDescription.technolgies[0]}</li>
                <li className="bg-primary rounded p-1 text-white text-xs text-center"> {popup[0].popupDescription.technolgies[1]}</li>
                <li className="bg-primary rounded p-1 text-white text-xs text-center"> {popup[0].popupDescription.technolgies[2]}</li>
                <li className="bg-primary rounded p-1 text-white text-xs text-center"> {popup[0].popupDescription.technolgies[3]}</li>
              </ul>
          <div className="text-justify">
            {popup[0].popupDescription.description}
          </div>
</div> 
</div>

        
 

  )
}

export default Popop