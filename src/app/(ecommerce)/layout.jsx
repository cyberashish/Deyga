"use client"

import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import AnnouncementBsr from '../Components/AnnouncementBsr'
import { ProductProvider } from '@/store/cart'

const EcommLayout = ({children}) => {
  return (
    <>
    <ProductProvider>
    <AnnouncementBsr/>
      <Header/>
      {children}
      <Footer/>
      </ProductProvider>
    </>
  )
}

export default EcommLayout
