'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// This would typically come from your backend
const mockProperties = [
  { id: 1, address: '123 Main St', type: 'Apartment', size: 1000, rooms: 3 },
  { id: 2, address: '456 Elm St', type: 'House', size: 2000, rooms: 4 },
  { id: 3, address: '789 Oak St', type: 'Condo', size: 1500, rooms: 2 },
]

export default function PropertyList() {
  const [properties] = useState(mockProperties)

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size (sq ft)</TableHead>
              <TableHead>Rooms</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.address}</TableCell>
                <TableCell>{property.type}</TableCell>
                <TableCell>{property.size}</TableCell>
                <TableCell>{property.rooms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

