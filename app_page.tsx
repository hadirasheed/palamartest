'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/swirly-doodle.svg")', 
          backgroundSize: '100% 100%',
          opacity: 5  // Change this value from 0.1 to 0.5
        }}
      ></div>
      <div className="relative z-10">
        <Card className="w-[350px] shadow-lg bg-white rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-blue-900">PALMAR</CardTitle>
            <CardDescription className="text-center text-blue-600">WhatsApp Chatbot</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-blue-100">
                <TabsTrigger value="login" onClick={() => setIsLogin(true)} className="data-[state=active]:bg-blue-200 text-blue-900">Login</TabsTrigger>
                <TabsTrigger value="register" onClick={() => setIsLogin(false)} className="data-[state=active]:bg-blue-200 text-blue-900">Sign Up</TabsTrigger>
              </TabsList>
              <div className="relative mt-4 h-[250px]">
                <TabsContent 
                  value="login" 
                  className="absolute top-0 left-0 right-0 transition-opacity duration-300 ease-in-out"
                  style={{ opacity: isLogin ? 1 : 0, pointerEvents: isLogin ? 'auto' : 'none' }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-blue-900">Email</Label>
                      <Input id="login-email" type="email" placeholder="m@example.com" required className="bg-white text-blue-900 placeholder:text-blue-400 border border-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-blue-900">Password</Label>
                      <Input id="login-password" type="password" required className="bg-white text-blue-900 placeholder:text-blue-400 border border-blue-200" />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Login
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent 
                  value="register" 
                  className="absolute top-0 left-0 right-0 transition-opacity duration-300 ease-in-out"
                  style={{ opacity: isLogin ? 0 : 1, pointerEvents: isLogin ? 'none' : 'auto' }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-blue-900">Name</Label>
                      <Input id="register-name" type="text" placeholder="John Doe" required className="bg-white text-blue-900 placeholder:text-blue-400 border border-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-blue-900">Email</Label>
                      <Input id="register-email" type="email" placeholder="m@example.com" required className="bg-white text-blue-900 placeholder:text-blue-400 border border-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-blue-900">Password</Label>
                      <Input id="register-password" type="password" required className="bg-white text-blue-900 placeholder:text-blue-400 border border-blue-200" />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Sign Up
                    </Button>
                  </form>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-blue-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button 
                variant="link" 
                className="text-blue-700 hover:text-blue-900"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

