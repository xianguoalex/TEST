'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bell, Home, Key, FileText, DollarSign, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  const sections = [
    { name: 'Owner Information', icon: Home, href: '/owner-information' },
    { name: 'Key Tracking', icon: Key, href: '/key-tracking' },
    { name: 'Property Inspection', icon: FileText, href: '/property-inspection' },
    { name: 'Account Summary', icon: DollarSign, href: '/account-summary' },
  ]

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    router.push('/')
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
        <CardDescription>Your tasks, updates, and notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-blue-500" />
            <span>You have 3 new notifications</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map((section) => (
              <Link key={section.name} href={section.href} className="no-underline">
                <Button variant="outline" className="w-full h-32 flex flex-col items-center justify-center space-y-2">
                  <section.icon className="h-8 w-8" />
                  <span className="text-center">{section.name}</span>
                </Button>
              </Link>
            ))}
          </div>
          <Button onClick={handleLogout} className="w-full" variant="destructive">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

