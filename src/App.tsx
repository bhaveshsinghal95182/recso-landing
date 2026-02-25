import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import Hero from './components/hero'
import TargetCursor from './components/TargetCursor'
import About from './components/about'
import { Pricing } from './components/pricing'

function App() {
  return (
    <div className="relative w-full bg-background text-foreground selection:bg-primary/20">
      <Header />
      <div className="w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
            </>
          } />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
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
