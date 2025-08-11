export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-black text-white font-bold">C</span>
            <span className="font-semibold tracking-tight text-lg">Chats & the City</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#episodes" className="hover:text-black/70">Episodes</a>
            <a href="#about" className="hover:text-black/70">About</a>
            <a href="#hosts" className="hover:text-black/70">Hosts</a>
            <a href="#subscribe" className="hover:text-black/70">Subscribe</a>
            <a href="#contact" className="hover:text-black/70">Contact</a>
          </nav>
          <a href="#subscribe" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white text-sm font-medium shadow-sm hover:opacity-90">Listen now</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,#fbe7ff_0%,transparent_60%),radial-gradient(1000px_500px_at_-10%_10%,#e8f5ff_0%,transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Conversations with women who bring <span className="underline decoration-pink-300 decoration-4">wit, range,</span> and real life to the mic.</h1>
            <p className="mt-5 text-lg text-gray-600">A women-led interview show hosted by Gelathi — part chai, part cheek, all heart. Big talk and banter on work, art, love, money, power, nature, and everything in between.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#subscribe" className="rounded-2xl px-5 py-3 bg-black text-white font-medium">Subscribe</a>
              <a href="#episodes" className="rounded-2xl px-5 py-3 border font-medium">Latest episodes</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">New episodes every week • Recorded in Jakarta ✦ Women-only guests</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl overflow-hidden">
              <div className="w-full h-full grid place-items-center p-6">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wide text-gray-500">Podcast Artwork Placeholder</div>
                  <div className="mt-2 text-2xl font-bold">Chats & the City</div>
                  <div className="mt-2 text-gray-600">Drop your cover art here</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border rounded-2xl shadow-md px-4 py-3">
              <div className="text-xs text-gray-500">Featured guests</div>
              <div className="mt-1 flex -space-x-2">
                {["Aparna","Bindu","Susie","You"].map((n, i) => (
                  <span key={i} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs border-2 border-white">{n[0]}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE STRIP */}
      <section id="subscribe" className="border-y bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Subscribe wherever you listen</h2>
            <p className="mt-2 text-gray-600">We’ll be on every major platform at launch. Add us now so you don’t miss Episode 1.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: 'Apple Podcasts', href: '#' },
              { label: 'Spotify', href: '#' },
              { label: 'YouTube', href: '#' },
              { label: 'RSS', href: '#' },
            ].map((b) => (
              <a key={b.label} href={b.href} className="rounded-xl px-4 py-2 border bg-white shadow-sm hover:shadow text-sm">{b.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* EPISODES */}
      <section id="episodes" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Latest Episodes</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">See all</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="group rounded-3xl overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 grid place-items-center text-gray-500">Episode artwork</div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-gray-500">Episode {i}</div>
                <h3 className="mt-1 font-semibold text-lg">Title placeholder — witty, honest, and a little chaotic</h3>
                <p className="mt-2 text-sm text-gray-600">Two-line teaser. What we learned, what we laughed at, and one brave take.</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" className="text-sm font-medium underline underline-offset-4">Listen</a>
                  <span className="text-gray-400">•</span>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Show notes</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">About the show</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">A women-led interview series from Jakarta. We talk work, love, money, art, nature, power, and the messy middle — through stories that feel like chai with your smartest friend. Guests include founders, artists, activists, athletes, and the women you don’t hear from enough.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✦ Women-only guest list</li>
              <li>✦ Weekly drops, 30–40 mins</li>
              <li>✦ Smart, warm, slightly feral vibes</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6 bg-gray-50">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">Get episode drops, guest picks, and extras in your inbox.</p>
            <form className="mt-4 flex w-full gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="you@email.com" className="flex-1 rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
              <button className="rounded-xl px-5 py-3 bg-black text-white font-medium">Join</button>
            </form>
            <p className="mt-2 text-xs text-gray-500">We’ll never spam. Pinky promise.</p>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section id="hosts" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Host & recurring guests</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Gelathi (Host)', bio: 'Witty conversation driver. Regional Director turned podcast troublemaker. Jakarta-based.'},
            { name: 'Aparna Bhatnagar Saxena', bio: 'CEO of Torajamelo & co-founder/CEO of Ahana. Sustainability and veganism in action.'},
            { name: 'Bindu', bio: 'Nature soul. Feminine energy. Brings the forest to the feed.'},
          ].map((p, i) => (
            <div key={i} className="rounded-3xl border p-6 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-square rounded-2xl bg-gray-100 grid place-items-center text-gray-400">Photo</div>
              <h3 className="mt-4 font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold">Chats & the City</div>
            <p className="mt-2 text-sm text-gray-600">Women speaking freely, expansively, and unexpectedly — from Jakarta to the world.</p>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#episodes" className="hover:underline">Episodes</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#hosts" className="hover:underline">Hosts</a></li>
              <li><a href="#subscribe" className="hover:underline">Subscribe</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="mailto:hello@chatsandthecity.com" className="hover:underline">hello@chatsandthecity.com</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Chats & the City</div>
      </footer>
    </div>
  );
}
