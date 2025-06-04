"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
    marketing: z.boolean().default(false).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export default function SignUpPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      marketing: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-ivory py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block relative h-[600px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=600&width=600&text=Elfie's+Bakery"
            alt="Bakery showcase"
            fill
            className="object-cover"
          />
        </div>

        <div>
          {isSuccess ? (
            <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-none">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-cherry-mist font-script">
                  Welcome to Elfie's Bakery!
                </CardTitle>
                <CardDescription>Your account has been created successfully.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-700">
                  Thank you for joining our sweet community. You can now enjoy exclusive offers and easily place orders
                  online.
                </p>
                <Link href="/">
                  <Button className="w-full !bg-white !text-cherry-mist !border-cherry-mist border-2 hover:!bg-ivory font-medium">
                    Return to Home
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-cherry-mist font-script">Create Your Account</CardTitle>
                <CardDescription>
                  Join our sweet community to receive special offers and easily place orders online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="marketing"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Email me about special offers and new products</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full !bg-white !text-cherry-mist !border-cherry-mist border-2 hover:!bg-ivory font-medium text-base"
                      disabled={isSubmitting}
                    >
                      <span className="text-cherry-mist font-medium">
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                      </span>
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <Link href="#" className="text-cherry-mist hover:underline font-medium">
                        Sign in
                      </Link>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
