'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (file) {
      console.log('Uploading file:', file.name)
      // Here you would typically send the file to your backend
    }
  }

  return (
    <Card>
      <form onSubmit={handleUpload}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="document">Upload Property Document</Label>
            <Input id="document" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={!file}>
            Upload Document
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

