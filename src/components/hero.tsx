import TargetCursor from './TargetCursor'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className="w-screen h-screen bg-foreground flex items-center justify-center gap-6">
      <TargetCursor
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.3}
        spinDuration={4}
      />
      <Button className="cursor-target cursor-none">Download app</Button>
    </div>
  )
}
