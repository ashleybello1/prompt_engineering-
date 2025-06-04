"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Gallery item type
type GalleryItem = {
  id: number
  title: string
  description: string
  image: string
  category: string
}

// Gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Signature Birthday Cake",
    description: "Three-layer vanilla cake with buttercream frosting and colorful sprinkles",
    image: "/placeholder.svg?height=600&width=600&text=Birthday+Cake",
    category: "cakes",
  },
  {
    id: 2,
    title: "Wedding Cake Collection",
    description: "Elegant three-tier wedding cake with floral decorations",
    image: "/placeholder.svg?height=600&width=600&text=Wedding+Cake",
    category: "cakes",
  },
  {
    id: 3,
    title: "Chocolate Ganache Tart",
    description: "Rich chocolate ganache in a buttery tart shell with gold leaf",
    image: "/placeholder.svg?height=600&width=600&text=Chocolate+Tart",
    category: "pastries",
  },
  {
    id: 4,
    title: "French Macaron Tower",
    description: "Colorful tower of French macarons for special events",
    image: "/placeholder.svg?height=600&width=600&text=Macaron+Tower",
    category: "specialty",
  },
  {
    id: 5,
    title: "Artisan Bread Selection",
    description: "Freshly baked artisan sourdough, baguettes, and specialty breads",
    image: "/placeholder.svg?height=600&width=600&text=Artisan+Bread",
    category: "bread",
  },
  {
    id: 6,
    title: "Seasonal Fruit Tarts",
    description: "Buttery tart shells filled with pastry cream and topped with seasonal fruits",
    image: "/placeholder.svg?height=600&width=600&text=Fruit+Tarts",
    category: "pastries",
  },
  {
    id: 7,
    title: "Cupcake Variety",
    description: "Assortment of our most popular cupcake flavors",
    image: "/placeholder.svg?height=600&width=600&text=Cupcakes",
    category: "cupcakes",
  },
  {
    id: 8,
    title: "Holiday Cookie Box",
    description: "Festive selection of holiday-themed decorated cookies",
    image: "/placeholder.svg?height=600&width=600&text=Holiday+Cookies",
    category: "cookies",
  },
  {
    id: 9,
    title: "Classic Croissants",
    description: "Buttery, flaky croissants made with traditional French techniques",
    image: "/placeholder.svg?height=600&width=600&text=Croissants",
    category: "pastries",
  },
  {
    id: 10,
    title: "Custom Birthday Cake",
    description: "Unicorn-themed birthday cake with rainbow layers",
    image: "/placeholder.svg?height=600&width=600&text=Unicorn+Cake",
    category: "cakes",
  },
  {
    id: 11,
    title: "Breakfast Pastry Platter",
    description: "Selection of morning pastries including danishes, scones, and muffins",
    image: "/placeholder.svg?height=600&width=600&text=Breakfast+Pastries",
    category: "pastries",
  },
  {
    id: 12,
    title: "Dessert Table Setup",
    description: "Custom dessert table for a wedding featuring various mini desserts",
    image: "/placeholder.svg?height=600&width=600&text=Dessert+Table",
    category: "specialty",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200&text=Our+Gallery"
          alt="Our Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-script">Gallery</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">A showcase of our handcrafted creations</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <TabsTrigger value="all" className="text-sm md:text-base">
                  All
                </TabsTrigger>
                <TabsTrigger value="cakes" className="text-sm md:text-base">
                  Cakes
                </TabsTrigger>
                <TabsTrigger value="pastries" className="text-sm md:text-base">
                  Pastries
                </TabsTrigger>
                <TabsTrigger value="bread" className="text-sm md:text-base">
                  Bread
                </TabsTrigger>
                <TabsTrigger value="cupcakes" className="text-sm md:text-base">
                  Cupcakes
                </TabsTrigger>
                <TabsTrigger value="specialty" className="text-sm md:text-base">
                  Specialty
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <GalleryCard key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                ))}
              </div>
            </TabsContent>

            {["cakes", "pastries", "bread", "cupcakes", "specialty", "cookies"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <GalleryCard key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
            </Button>
            {selectedImage && (
              <>
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-[#D49EA2] font-script">{selectedImage.title}</h3>
                  <p className="text-gray-700 mt-1">{selectedImage.description}</p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Instagram Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FDF6F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#D49EA2] font-script">Follow Us on Instagram</h2>
          <p className="text-gray-700 mb-8">
            Tag us in your photos with <span className="font-semibold">#ElfiesBakery</span> for a chance to be featured!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#E8B4B8] to-[#D49EA2] hover:from-[#D49EA2] hover:to-[#E8B4B8] text-white"
          >
            @elfies_bakery
          </Button>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Custom+Creations"
              alt="Custom cake creations"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#D49EA2] font-script">Custom Creations</h2>
            <p className="text-gray-700 mb-6">
              Looking for something special? Our talented team can create custom desserts for any occasion. From wedding
              cakes to corporate events, we'll work with you to bring your vision to life.
            </p>
            <Button className="bg-[#E8B4B8] hover:bg-[#D49EA2] text-white">Request a Custom Order</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Gallery Card Component
function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={onClick}
        >
          <div className="relative aspect-square">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </div>
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-[#D49EA2] font-script">{item.title}</h3>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  )
}
