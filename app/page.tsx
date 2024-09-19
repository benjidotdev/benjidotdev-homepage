import Hero from '@/app/components/hero/Hero'
import Experience from '@/app/components/experience/Experience'
import Contact from '@/app/components/contact/Contact'
// import Skills from '@/app/components/skills/Skills'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Experience />
      {/*<Skills />*/}
      <Contact />
    </div>
  );
}