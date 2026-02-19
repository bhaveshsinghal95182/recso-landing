import Demo from './components/demo'
import GradualBlurMemo from './components/GradualBlur'
import { Header } from './components/header'
import Hero from './components/hero'
import TargetCursor from './components/TargetCursor'

function App() {
  return (
    <div className="relative w-full bg-background text-foreground selection:bg-primary/20">
      <Header />
      <div className="w-full">
        <Hero />
        <GradualBlurMemo />
        <Demo />
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
