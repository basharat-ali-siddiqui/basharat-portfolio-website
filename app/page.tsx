import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
