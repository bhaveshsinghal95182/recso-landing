import { Header } from './components/header'
import Hero from './components/hero'
import TargetCursor from './components/TargetCursor'
import About from './components/about'

function App() {
  return (
    <div className="relative w-full bg-background text-foreground selection:bg-primary/20">
      <Header />
      <div className="w-full">
        <Hero />
        <About />
      </div>
      <TargetCursor
        hideDefaultCursor
        parallaxOn
        targetSelector=".cursor-target, .magnet-target"
        hoverDuration={0.3}
        spinDuration={4}
        proximity={20}
      />
    </div>
  )
}

export default App
