import React from 'react'
import CustomButton from './CustomButton'
const AiPicker = ({prompt,setPrompt,generateImage,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea'
       placeholder='ask what you want'
       rows={5}
       value={prompt}
       onChange={(e) => setPrompt(e.target.value)}
       />
       <div className='flex flex-wrap gap-3'>
        {generateImage ? <CustomButton
          type="outline"
          title="Asking Ai"
          customStyles="text-xs"
          
        /> : <>
          <CustomButton
          type="outline"
          title="Ai Logo"
          handleClick={()=> handleSubmit('logo')}
          customStyles='text-xs'
          />
          <CustomButton
          type="filled"
          title="Ai Full"
          handleClick={()=> handleSubmit('full')}
          customStyles='text-xs'
          />
        </>}
       </div>
    </div>
  )
}

export default AiPicker