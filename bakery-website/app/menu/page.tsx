import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Menu item type
type MenuItem = {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  popular?: boolean
  dietary?: string[]
}

// Menu data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Croissant",
    description: "Buttery, flaky layers with a golden exterior",
    price: "$3.95",
    image: "/images/classic-croissants.png",
    category: "pastries",
    popular: true,
  },
  {
    id: 2,
    name: "Heart Shaped Puff Pastery",
    description: "Buttery, Flaky with a golden exterior, baked into a heart shape pastry",
    price: "$4.50",
    image: "https://i.pinimg.com/736x/93/f5/de/93f5dea9d8dc66994893d0c8520d7b97.jpg",
    category: "pastries",
  },
  {
    id: 3,
    name: "Vanilla Cupcakes with Raspberries",
    description: "Light vanilla cupcakes topped with whipped cream and fresh raspberries",
    price: "$4.95",
    image: "https://i.pinimg.com/736x/8a/e1/3c/8ae13c395b120a1029e4b3179541dd27.jpg",
    category: "cupcakes",
  },
  {
    id: 4,
    name: "Vanilla Bean Cupcake",
    description: "Moist vanilla cake with vanilla buttercream frosting",
    price: "$3.75",
    image: "https://i.pinimg.com/736x/51/d3/fa/51d3fa7530122dede05b331e8dea672c.jpg",
    category: "cupcakes",
    popular: true,
  },
  {
    id: 5,
    name: "Strawberry Matcha Cupcakes",
    description: "Soft matcha cupakes with vanilla frosting, crowned with a fresh strabwery on top",
    price: "$3.95",
    image: "https://i.pinimg.com/736x/d0/2e/df/d02edfc27e5dc519444a76201df84424.jpg",
    category: "cupcakes",
  },
  {
    id: 6,
    name: "Crossiant with cream inside and Strawberries on",
    description: "Rich chocolate cake with silky ganache topping",
    price: "$4.25",
    image: "/placeholder.svg?height=300&width=300&text=Chocolate+Cupcake",
    category: "cupcakes",
  },
  {
    id: 7,
    name: "Signature Birthday Cake",
    description: "Three-layer vanilla cake with buttercream and sprinkles",
    price: "$38.00",
    image: "/placeholder.svg?height=300&width=300&text=Birthday+Cake",
    category: "cakes",
    popular: true,
  },
  {
    id: 8,
    name: "Chocolate Truffle Cake",
    description: "Decadent chocolate cake with truffle filling and ganache",
    price: "$42.00",
    image: "/placeholder.svg?height=300&width=300&text=Chocolate+Cake",
    category: "cakes",
  },
  {
    id: 9,
    name: "Carrot Cake",
    description: "Spiced carrot cake with cream cheese frosting and walnuts",
    price: "$40.00",
    image: "/placeholder.svg?height=300&width=300&text=Carrot+Cake",
    category: "cakes",
  },
  {
    id: 10,
    name: "Chocolate Chip Cookie",
    description: "Classic cookie with Belgian chocolate chunks",
    price: "$2.50",
    image: "/placeholder.svg?height=300&width=300&text=Chocolate+Chip",
    category: "cookies",
    popular: true,
  },
  {
    id: 11,
    name: "Oatmeal Raisin Cookie",
    description: "Chewy oatmeal cookie with plump raisins",
    price: "$2.50",
    image: "/placeholder.svg?height=300&width=300&text=Oatmeal+Raisin",
    category: "cookies",
  },
  {
    id: 12,
    name: "Macaron Box",
    description: "Assortment of 6 French macarons in seasonal flavors",
    price: "$15.00",
    image: "/placeholder.svg?height=300&width=300&text=Macarons",
    category: "specialty",
    dietary: ["gluten-free"],
  },
  {
    id: 13,
    name: "Vegan Banana Bread",
    description: "Moist banana bread made without animal products",
    price: "$3.95",
    image: "/placeholder.svg?height=300&width=300&text=Banana+Bread",
    category: "specialty",
    dietary: ["vegan"],
  },
  {
    id: 14,
    name: "Gluten-Free Brownie",
    description: "Fudgy chocolate brownie made with gluten-free flour",
    price: "$4.25",
    image: "/placeholder.svg?height=300&width=300&text=GF+Brownie",
    category: "specialty",
    dietary: ["gluten-free"],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200&text=Our+Menu"
          alt="Our Menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-script">Our Menu</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Handcrafted with love, using only the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <TabsTrigger value="all" className="text-sm md:text-base">
                  All
                </TabsTrigger>
                <TabsTrigger value="pastries" className="text-sm md:text-base">
                  Pastries
                </TabsTrigger>
                <TabsTrigger value="cupcakes" className="text-sm md:text-base">
                  Cupcakes
                </TabsTrigger>
                <TabsTrigger value="cakes" className="text-sm md:text-base">
                  Cakes
                </TabsTrigger>
                <TabsTrigger value="cookies" className="text-sm md:text-base">
                  Cookies
                </TabsTrigger>
                <TabsTrigger value="specialty" className="text-sm md:text-base">
                  Specialty
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            {["pastries", "cupcakes", "cakes", "cookies", "specialty"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FDF6F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#D49EA2] font-script">Custom Orders</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Planning a special event? We create custom cakes, dessert tables, and catering packages tailored to your
            needs. Contact us to discuss your vision.
          </p>
          <Button size="lg" className="bg-[#E8B4B8] hover:bg-[#D49EA2] text-white">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#D49EA2] font-script text-center">Dietary Information</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#FDF6F0] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-3 font-script text-[#D49EA2]">Gluten-Free Options</h3>
              <p className="text-gray-700">
                We offer a selection of gluten-free treats made in a dedicated area to minimize cross-contamination.
              </p>
            </div>
            <div className="bg-[#FDF6F0] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-3 font-script text-[#D49EA2]">Vegan Delights</h3>
              <p className="text-gray-700">
                Our vegan options are made without any animal products while maintaining the delicious taste you expect.
              </p>
            </div>
            <div className="bg-[#FDF6F0] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-3 font-script text-[#D49EA2]">Nut Allergies</h3>
              <p className="text-gray-700">
                Please inform us about allergies. While we take precautions, our kitchen does process nuts and other
                allergens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Menu Item Card Component
function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="overflow-hidden border-none shadow-md h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {item.popular && (
          <Badge className="absolute top-2 right-2 bg-[#E8B4B8] hover:bg-[#D49EA2] text-white">Popular</Badge>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-[#D49EA2] font-script">{item.name}</h3>
          <span className="font-medium text-gray-900">{item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.dietary?.map((diet) => (
            <Badge key={diet} variant="outline" className="text-xs">
              {diet}
            </Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full border-[#E8B4B8] text-[#D49EA2] hover:bg-[#FDF6F0] mt-auto">
          Order Now
        </Button>
      </CardContent>
    </Card>
  )
}
