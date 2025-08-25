export default function Home() {
  // ---- Data you can edit anytime ----
  const episodes = [
    { n: 1, title: "The First Sip", teaser: "Why women’s conversations are the strongest caffeine.", img: "/ep-first-sip.jpg" },
    { n: 2, title: "Cat Moms Unite", teaser: "On living with fur, claws, and unconditional love.", img: "/ep-cat-moms.jpg" },
    { n: 3, title: "Finding Joy in Chaos", teaser: "Balancing ambition, self-care, and spontaneity.", img: "/ep-joy-in-chaos.jpg" }
  ];

  const hosts = [
    { name: "Supritha (Host)", bio: "Witty conversation driver. Regional Director turned podcast troublemaker. Jakarta-based.", img: "/gelathi.jpg" },
    { name: "Bindu", bio: "Nature whisperer and keeper of calm, with roots deep in the earth.", img: "/bindu.jpg" },
    { name: "Susmitha", bio: "Cat mom and real-life Disney princess, welcoming every animal into her magical garden.", img: "/susmithaa.jpg" }
  ];

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
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Conversations with women who bring wit, range, and a spark of magic to everyday life.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Chats & The City is your weekly dose of laughter, insight, and unapologetically female perspectives.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#subscribe" className="rounded-2xl px-5 py-3 bg-black text-white font-medium">Subscribe</a>
              <a href="#episodes" className="rounded-2xl px-5 py-3 border font-medium">Latest episodes</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">New episodes every week • Recorded in Jakarta ✦ Women-only guests</p>
          </div>

          {/* Cover image */}
          <div className="rounded-3xl overflow-hidden border shadow-lg">
            <img src="/cover.jpg" alt="Chats & The City cover" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SUBSCRIBE STRIP (platform buttons) */}
      <section className="border-y bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Subscribe wherever you listen</h2>
            <p className="mt-2 text-gray-600">Never miss an episode — join our mailing list or find us on your favorite platform.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* Replace # with your links when ready */}
            <a href="#" className="rounded-xl px-4 py-2 border bg-white shadow-sm hover:shadow text-sm">Apple Podcasts</a>
            <a href="#" className="rounded-xl px-4 py-2 border bg-white shadow-sm hover:shadow text-sm">Spotify</a>
            <a href="#" className="rounded-xl px-4 py-2 border bg-white shadow-sm hover:shadow text-sm">YouTube</a>
            <a href="#" className="rounded-xl px-4 py-2 border bg-white shadow-sm hover:shadow text-sm">RSS</a>
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
          {episodes.map((ep) => (
            <article key={ep.n} className="group rounded-3xl overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img src={ep.img} alt={`Artwork for ${ep.title}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-gray-500">Episode {ep.n}</div>
                <h3 className="mt-1 font-semibold text-lg">{ep.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{ep.teaser}</p>
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

      {/* ABOUT + NEWSLETTER (clean GoDaddy HTML embed) */}
      <section id="about" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">About the show</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Chats & The City celebrates women’s voices without limiting them to “women’s issues.”
              We talk about work, love, cats, books, messy kitchens, brilliant ideas, and everything in between.
              No filters, no pretence — just honest talk, over a cup of kopi.
            </p>
          </div>

          <div className="rounded-3xl border p-6 bg-gray-50">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">Get episode drops, guest picks, and extras in your inbox.</p>

            {/* Clean, styled form that posts to GoDaddy */}
            <form
              id="ema_signup_form"
              target="_blank"
              action="https://gem.godaddy.com/signups/subscribe/5319f7ed4bc549858a878844e19458b0"
              acceptCharset="UTF-8"
              method="post"
              className="mt-4 flex w-full gap-2"
            >
              {/* Required hidden fields from GoDaddy embed */}
              <input name="utf8" type="hidden" value="✓" />
              <input
                type="hidden"
                name="authenticity_token"
                value="56A2qKm5Yilr7L8ILKEiX4dfw3wdM0X02cOcdwV9TTAeEeiDbSkdmAYaFi64_lza8Bbw316jsBxVJqHx61Nvww"
              />
              {/* The original embed had a hidden honeypot + checkbox.
                  We’ll simplify: keep a beacon value to satisfy their backend. */}
              <input type="hidden" name="beacon" value="1" />

              <input
                id="signup_email"
                name="signup[email]"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                id="webform_submit_button"
                className="rounded-xl px-5 py-3 bg-black text-white font-medium hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-2 text-xs text-gray-500">We’ll never spam. Pinky promise.</p>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section id="hosts" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Host & recurring guests</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {hosts.map((p, i) => (
            <div key={i} className="rounded-3xl border p-6 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
             
