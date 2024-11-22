'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import OwnerForm from '@/components/OwnerForm'
import PropertyList from '@/components/PropertyList'
import SearchFilter from '@/components/SearchFilter'
import DocumentUpload from '@/components/DocumentUpload'

export default function OwnerInformation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Owner Information" />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add/Edit Owner</h2>
          <OwnerForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Property Portfolio</h2>
          <SearchFilter />
          <PropertyList />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Document Upload</h2>
        <DocumentUpload />
      </div>
    </div>
  )
}

