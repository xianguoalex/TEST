'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function SearchFilter() {
  const [filters, setFilters] = useState({
    search: '',
    rooms: '',
    propertyType: ''
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching with filters:', filters)
    // Here you would typically filter the properties based on all filters
  }

  return (
    <form onSubmit={handleSearch} className="mb-4 flex items-end gap-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            type="search"
            placeholder="Search by owner, address, or property ID"
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="rooms">Rooms</Label>
          <Input
            id="rooms"
            type="number"
            placeholder="Number of rooms"
            value={filters.rooms}
            onChange={(e) => setFilters({...filters, rooms: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="propertyType">Property Type</Label>
          <select
            id="propertyType"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={filters.propertyType}
            onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
          >
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}

