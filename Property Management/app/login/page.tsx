'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mfaCode, setMfaCode] = useState('')
  const [mfaEnabled, setMfaEnabled] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mfaEnabled) {
      // Simulate MFA trigger
      setMfaEnabled(true)
    } else {
      // Handle login with MFA
      console.log('Logging in with:', { email, password, mfaCode })
      // Here you would typically send a request to your authentication API
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {mfaEnabled && (
              <div className="space-y-2">
                <Label htmlFor="mfa">MFA Code</Label>
                <Input 
                  id="mfa" 
                  type="text" 
                  value={mfaCode} 
                  onChange={(e) => setMfaCode(e.target.value)} 
                  required 
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-2">
            <Button type="submit" className="w-full">
              {mfaEnabled ? 'Verify' : 'Login'}
            </Button>
            <p className="text-sm text-gray-500">
              Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign up</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

