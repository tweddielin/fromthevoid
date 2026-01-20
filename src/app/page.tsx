import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo / Brand */}
        <div className="mb-8 animate-float">
          <Image
            src="/logo.png"
            alt="The Void"
            width={280}
            height={350}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          THE VOID
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-12 tracking-wide">
          From The Void.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-12" />

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-white/70">Coming Soon</span>
        </div>

        {/* Contact */}
        <div className="mt-16">
          <a 
            href="mailto:hello@fromthevoid.space" 
            className="text-sm text-white/40 hover:text-white/80 transition-colors duration-300"
          >
            hello@fromthevoid.space
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} From The Void. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
