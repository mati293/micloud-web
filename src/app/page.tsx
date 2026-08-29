import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Model } from "@/components/sections/model"
import { Services } from "@/components/sections/services"
import { Sla } from "@/components/sections/sla"
import { Uruguay } from "@/components/sections/uruguay"
import { About } from "@/components/sections/about"
import { Steps } from "@/components/sections/steps"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Model />
        <Services />
        <Sla />
        <Uruguay />
        <About />
        <Steps />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
