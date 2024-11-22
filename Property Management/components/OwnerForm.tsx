'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function OwnerForm() {
  const [owner, setOwner] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    propertySize: '',
    rooms: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOwner({ ...owner, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Owner data:', owner)
    // Here you would typically send the data to your backend
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Owner Name</Label>
            <Input id="name" name="name" value={owner.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={owner.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" value={owner.phone} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="address">Property Address</Label>
            <Textarea id="address" name="address" value={owner.address} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="propertyType">Property Type</Label>
            <Input id="propertyType" name="propertyType" value={owner.propertyType} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="propertySize">Property Size (sq ft)</Label>
            <Input id="propertySize" name="propertySize" type="number" value={owner.propertySize} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="rooms">Number of Rooms</Label>
            <Input id="rooms" name="rooms" type="number" value={owner.rooms} onChange={handleChange} required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save Owner Information</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

