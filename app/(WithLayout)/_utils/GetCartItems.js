'use client'
import React from 'react'

import GlobalApi from './GlobalApi';


const GetCartItems =(user)=>{

        GlobalApi.getCartItems(user.primaryEmailAddress.emailAddress).then((resp)=>{
          // console.log(`latest cart data : ${JSON.stringify(resp.data.data)}`)
          return(resp.data.data)
        },(err)=>{
          console.log(err)
        })

      }

export default GetCartItems