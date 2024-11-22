import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Home, Key, FileText, DollarSign } from 'lucide-react'

export default function Dashboard() {
  const sections = [
    { name: 'Owner Information', icon: Home, href: '/owner-information' },
    { name: 'Key Tracking', icon: Key, href: '/key-tracking' },
    { name: 'Property Inspection', icon: FileText, href: '/property-inspection' },
    { name: 'Account Summary', icon: DollarSign, href: '/account-summary' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Your tasks, updates, and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-blue-500" />
              <span>You have 3 new notifications</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section) => (
                <Button key={section.name} variant="outline" asChild className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Link href={section.href}>
                    <section.icon className="h-6 w-6" />
                    <span>{section.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

