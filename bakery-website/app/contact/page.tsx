"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()
    }, 1500)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200&text=Contact+Us"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-script">Contact Us</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl mb-6 text-[#D49EA2] font-script">Send Us a Message</h2>

            {isSuccess ? (
              <Alert className="bg-[#E8B4B8]/10 border-[#E8B4B8]">
                <AlertTitle className="text-[#D49EA2] font-script text-lg">Thank you!</AlertTitle>
                <AlertDescription>
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </AlertDescription>
                <Button className="mt-4 bg-[#E8B4B8] hover:bg-[#D49EA2] text-white" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </Alert>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="order">Order Information</SelectItem>
                            <SelectItem value="custom">Custom Order Request</SelectItem>
                            <SelectItem value="catering">Catering Services</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#E8B4B8] hover:bg-[#D49EA2] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-6 text-[#D49EA2] font-script">Visit Our Bakery</h2>

            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Map"
                alt="Bakery location map"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-[#D49EA2] mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">123 Bakery Street</p>
                      <p className="text-gray-700">New York, NY 10001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-[#D49EA2] mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700">(123) 456-7890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-[#D49EA2] mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">info@elfiesbakery.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-[#D49EA2] mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-700">Mon-Fri: 7am - 7pm</p>
                      <p className="text-gray-700">Sat-Sun: 8am - 5pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FDF6F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#D49EA2] font-script">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <FaqItem question="Do you offer delivery?">
              Yes, we offer local delivery within a 10-mile radius for orders over $30. Delivery fees vary based on
              distance. We also ship certain items nationwide.
            </FaqItem>

            <FaqItem question="How far in advance should I order a custom cake?">
              For standard custom cakes, we recommend ordering at least 72 hours in advance. For wedding cakes or large
              special event orders, we suggest 2-4 weeks notice.
            </FaqItem>

            <FaqItem question="Do you accommodate dietary restrictions?">
              Yes! We offer a variety of options for different dietary needs, including gluten-free, vegan, and nut-free
              items. Please inform us of any allergies when placing your order.
            </FaqItem>

            <FaqItem question="Can I place an order online?">
              Yes, you can place orders through our website for pickup or delivery. For custom orders, you can start the
              process online and we'll follow up to discuss details.
            </FaqItem>

            <FaqItem question="Do you offer catering for events?">
              We offer catering services for events of all sizes, from small gatherings to large corporate functions and
              weddings. Contact us for a custom quote.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#D49EA2] font-script">Stay Updated</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for seasonal specials, events, and baking tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input placeholder="Your email address" type="email" className="flex-grow" />
            <Button className="bg-[#E8B4B8] hover:bg-[#D49EA2] text-white whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// FAQ Item Component
function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg text-[#D49EA2] font-script mb-2">{question}</h3>
        <p className="text-gray-700">{children}</p>
      </CardContent>
    </Card>
  )
}
