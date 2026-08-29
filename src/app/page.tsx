import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Showcase } from "@/components/sections/showcase"
import { About } from "@/components/sections/about"
import { WhyUs } from "@/components/sections/why-us"
import { Services } from "@/components/sections/services"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Showcase />
        <About />
        <WhyUs />
        <Services />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
