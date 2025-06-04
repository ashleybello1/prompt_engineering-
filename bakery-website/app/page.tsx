import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import MusicPlayer from "@/components/music-player"

// Define pastry data for consistency
const pastries = [
  {
    id: 1,
    name: "Strawberry Shortcake",
    description: "Fresh strawberries, fluffy biscuit, and whipped cream perfection",
    image: "/images/strawberry-shortcake.jpeg",
  },
  {
    id: 2,
    name: "Simple Chocolate Cake",
    description: "Rich chocolate cake with fresh strawberries on top and Nutella frosting",
    image: "/images/chocolate-strawberry-cake.jpeg",
  },
  {
    id: 3,
    name: "Signature Pastry 3",
    description: "Our delicious handcrafted specialty",
    image: "/placeholder.svg?height=300&width=300&text=Pastry+3",
  },
  {
    id: 4,
    name: "Signature Pastry 4",
    description: "Our delicious handcrafted specialty",
    image: "/placeholder.svg?height=300&width=300&text=Pastry+4",
  },
  {
    id: 5,
    name: "Signature Pastry 5",
    description: "Our delicious handcrafted specialty",
    image: "/placeholder.svg?height=300&width=300&text=Pastry+5",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/elegant-flower-pastries.jpeg"
          alt="Elegant flower-shaped pastries from Elfie's Bakery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-script drop-shadow-lg">Elfie's Bakery</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
            Handcrafted pastries and cakes made with love since 2010
          </p>
          <Button
            size="lg"
            className="bg-white text-cherry-mist border-cherry-mist border hover:bg-ivory shadow-lg"
            style={{ backgroundColor: "white", color: "#E8B4B8", borderColor: "#E8B4B8" }}
          >
            Order Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-cherry-mist font-script">Our Signature Treats</h2>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {pastries.map((pastry) => (
                <CarouselItem key={pastry.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-md h-full">
                    <CardContent className="p-0 h-full">
                      <div className="relative aspect-square overflow-hidden rounded-t-lg">
                        <Image
                          src={pastry.image || "/placeholder.svg"}
                          alt={pastry.name}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4 bg-white rounded-b-lg">
                        <h3 className="font-semibold text-lg text-cherry-mist font-script">{pastry.name}</h3>
                        <p className="text-gray-600 text-sm">{pastry.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-cherry-mist text-white hover:bg-faded-petal" />
            <CarouselNext className="bg-cherry-mist text-white hover:bg-faded-petal" />
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-cherry-mist font-script">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Elfie's Bakery was founded with a simple mission: to create delicious, handcrafted pastries that bring joy
              to our customers. What started as a small family kitchen has grown into a beloved bakery known for quality
              and creativity.
            </p>
            <p className="text-gray-700 mb-6">
              Every day, our skilled pastry chefs create edible works of art using traditional techniques and the finest
              ingredients. From our signature flower pastries with delicate vanilla glazes to rustic artisan breads,
              each creation reflects our commitment to both beauty and exceptional taste.
            </p>
            <Button
              variant="outline"
              className="border-cherry-mist text-cherry-mist hover:bg-ivory"
              style={{ color: "#E8B4B8", borderColor: "#E8B4B8" }}
            >
              Learn More
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our Bakery"
              alt="Bakery interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-cherry-mist font-script">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                quote:
                  "The cakes are not only beautiful but absolutely delicious! Elfie's Bakery made my wedding cake and it was perfect.",
              },
              {
                name: "Michael Chen",
                quote:
                  "I order their pastry box every weekend. Fresh, creative, and always delightful. Best bakery in town!",
              },
              {
                name: "Emma Williams",
                quote:
                  "Their flower pastries are like edible art! So elegant and the flavors are incredible. Perfect for special occasions.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-cherry-mist text-4xl mb-4">"</div>
                    <p className="text-gray-700 italic flex-grow">{testimonial.quote}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="font-semibold text-cherry-mist font-script">{testimonial.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-cherry-mist text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 font-script">Ready to Treat Yourself?</h2>
          <p className="text-xl mb-8">
            Join our sweet community and be the first to know about seasonal specials and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-cherry-mist hover:bg-ivory border border-white"
              style={{ backgroundColor: "white", color: "#E8B4B8" }}
            >
              Order Online
            </Button>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-faded-petal">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed Music Player */}
      <MusicPlayer />
    </main>
  )
}
