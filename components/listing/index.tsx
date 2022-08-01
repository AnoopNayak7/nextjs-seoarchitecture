import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  console.log("myurls params", router)

  return (
    <div>
      <h1>Propert Listing</h1>
    </div>
  )
}

export default Index