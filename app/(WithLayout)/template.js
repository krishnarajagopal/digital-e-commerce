'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
const Template = ({ children }) => {

   return (
      <>
        <ProgressBar/>
         {children}
      </>
   )
}

export default Template