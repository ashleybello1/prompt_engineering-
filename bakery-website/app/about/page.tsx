import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Team member type
type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

// Team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Elfie Johnson",
    role: "Founder & Head Baker",
    bio: "Elfie founded the bakery in 2010 after years of perfecting family recipes. With formal training from Le Cordon Bleu, she combines classic techniques with innovative flavors.",
    image: "/placeholder.svg?height=400&width=400&text=Elfie",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Pastry Chef",
    bio: "Michael specializes in French pastries and has been with Elfie's Bakery for over 5 years. His croissants have won local awards and are a customer favorite.",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Cake Designer",
    bio: "Sophia brings artistry to every cake she creates. With a background in fine arts, she specializes in custom designs that are as beautiful as they are delicious.",
    image: "/placeholder.svg?height=400&width=400&text=Sophia",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Bread Baker",
    bio: "James is passionate about artisanal bread making. He studied traditional techniques in Europe and brings that knowledge to our daily bread selection.",
    image: "/placeholder.svg?height=400&width=400&text=James",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200&text=Our+Story"
          alt="Our Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-script">Our Story</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            From humble beginnings to your favorite neighborhood bakery
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Bakery+Origins"
              alt="Bakery origins"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#D49EA2] font-script">How It All Began</h2>
            <p className="text-gray-700 mb-4">
              Elfie's Bakery began in 2010 as a small home kitchen operation, where founder Elfie Johnson would bake
              pastries for local farmers' markets. Using recipes passed down through generations and techniques learned
              during her culinary training, Elfie quickly gained a reputation for exceptional quality and flavor.
            </p>
            <p className="text-gray-700 mb-4">
              As word spread and demand grew, Elfie took a leap of faith and opened our first storefront in 2012. What
              started with just two employees has now grown into a beloved local institution with a team of passionate
              bakers and pastry chefs.
            </p>
            <p className="text-gray-700">
              Today, while we've expanded our offerings and our team, our commitment to quality ingredients, traditional
              techniques, and community connection remains unchanged.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FDF6F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#D49EA2] font-script">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-[#E8B4B8]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D49EA2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v1" />
                    <path d="M12 21v1" />
                    <path d="M4.93 4.93l.7.7" />
                    <path d="M18.36 18.36l.7.7" />
                    <path d="M2 12h1" />
                    <path d="M21 12h1" />
                    <path d="M4.93 19.07l.7-.7" />
                    <path d="M18.36 5.64l.7-.7" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#D49EA2] font-script">Quality Ingredients</h3>
                <p className="text-gray-700">
                  We source the finest ingredients, from local organic flour to European butter and premium chocolate.
                  We believe that exceptional baked goods start with exceptional ingredients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-[#E8B4B8]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D49EA2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#D49EA2] font-script">Community Connection</h3>
                <p className="text-gray-700">
                  We're more than just a bakery – we're a gathering place. We support local events, collaborate with
                  nearby businesses, and strive to be a positive force in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-[#E8B4B8]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D49EA2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <circle cx="17.5" cy="17.5" r="3.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#D49EA2] font-script">Artisanal Craftsmanship</h3>
                <p className="text-gray-700">
                  We honor traditional baking methods while embracing innovation. Each item is handcrafted with care,
                  attention to detail, and a commitment to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#D49EA2] font-script">Meet Our Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-none shadow-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-[#D49EA2] font-script">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FDF6F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#D49EA2] font-script">Our Journey</h2>

          <div className="space-y-12">
            <TimelineItem year="2010" title="The Beginning" side="right">
              Elfie starts selling homemade pastries at local farmers' markets, quickly gaining a loyal following.
            </TimelineItem>

            <TimelineItem year="2012" title="First Storefront" side="left">
              Our first bakery opens in a small corner shop with just two employees and a limited menu of pastries and
              breads.
            </TimelineItem>

            <TimelineItem year="2015" title="Expansion" side="right">
              Due to growing demand, we move to our current larger location and expand our menu to include cakes,
              cupcakes, and specialty items.
            </TimelineItem>

            <TimelineItem year="2018" title="Award-Winning" side="left">
              Elfie's Bakery wins "Best Bakery" in the city's annual food awards, cementing our reputation for quality.
            </TimelineItem>

            <TimelineItem year="2020" title="Community Support" side="right">
              During challenging times, we pivot to delivery and donate baked goods to frontline workers.
            </TimelineItem>

            <TimelineItem year="Today" title="Growing Together" side="left">
              With a team of passionate bakers and a community of loyal customers, we continue to grow while staying
              true to our roots.
            </TimelineItem>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 px-4 md:px-8 bg-[#E8B4B8] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 font-script">Join Our Team</h2>
          <p className="text-xl mb-8">
            Passionate about baking? We're always looking for talented individuals to join our growing family.
          </p>
          <Button size="lg" className="bg-white text-[#D49EA2] hover:bg-[#FDF6F0]">
            View Open Positions
          </Button>
        </div>
      </section>
    </main>
  )
}

// Timeline Item Component
function TimelineItem({
  year,
  title,
  side,
  children,
}: {
  year: string
  title: string
  side: "left" | "right"
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E8B4B8]/30" />

      {/* Year marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#E8B4B8] flex items-center justify-center text-white font-medium z-10">
        {year.length <= 4 ? year : ""}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex ${
          side === "left" ? "flex-row-reverse md:flex-row" : "flex-row-reverse"
        } items-center`}
      >
        <div className="w-full md:w-1/2" />
        <div
          className={`w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md ${
            side === "left" ? "md:mr-10" : "md:ml-10"
          } my-8`}
        >
          <h3 className="font-semibold text-xl text-[#D49EA2] font-script">{title}</h3>
          <p className="text-gray-700 mt-2">{children}</p>
        </div>
      </div>
    </div>
  )
}
