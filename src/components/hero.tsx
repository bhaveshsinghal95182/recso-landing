import Windows from './svgs/windows'

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 50% 100%, rgba(52, 211, 153, 0.4) 0%, transparent 60%),
        radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.3) 0%, transparent 70%),
        radial-gradient(circle at 50% 100%, rgba(6, 95, 70, 0.2) 0%, transparent 80%)
      `,
        }}
      />
      <div className="relative z-10">
        <div className="max-w-full h-screen flex flex-col items-center pt-32 gap-6 ">
          <h1 className="inter-regular text-7xl tracking-tight text-center">
            Create{' '}
            <span className="instrument-serif-regular text-primary cursor-target">
              Cinematic
            </span>{' '}
            Product Demos{' '}
            <span className="block text-center">
              <span className="text-primary cursor-target">in Seconds</span>
            </span>
          </h1>
          <button className="magnet-target proximity-40 cursor-none text-xl tracking-tighter bg-primary text-background px-4 py-2 rounded-sm flex items-center gap-2 inter-semibold shadow-lg shadow-background/10">
            <Windows size="30" />
            Download for Free
          </button>
          <div className='pt-32'>
            <video
              src="/demo.webm"
              autoPlay
              loop
              muted
              className="w-[900px] h-[500px] border-8 border-border object-cover rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
