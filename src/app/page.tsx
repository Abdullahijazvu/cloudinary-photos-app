"use client"

import {useState} from 'react'
import { CldImage } from 'next-cloudinary';

export type UploadResult = {
  info:{
    public_id: string
  },
  event: "success"
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {imageId && 
      <CldImage
        width="400"
        height="300"
        src={imageId}
        sizes="100vw"
        cartoonify
        blurFaces
        alt="Description of my image"
      />}
    </main>
  )
}
