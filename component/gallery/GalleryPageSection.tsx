'use client'
import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import GallerySection from './GallerySection'
import { useCafeuContext } from '@/context/CafeuContext'

const GalleryPageSection = () => {
    const {galleryItemsToShow} = useCafeuContext()
  return (
    <>
        <BreadcrumbSection title="Gallery" header="Gallery Page"/>
        <GallerySection theme="theme-1" showBtn={true} endIndex={galleryItemsToShow}/>
    </>
  )
}

export default GalleryPageSection