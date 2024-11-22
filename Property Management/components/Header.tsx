'use client'

import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Button variant="outline" asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Return to Main Page
        </Link>
      </Button>
    </div>
  )
}

