{[
  { n: 1, title: "The First Sip", teaser: "Why women’s conversations are the strongest caffeine." },
  { n: 2, title: "Cat Moms Unite", teaser: "On living with fur, claws, and unconditional love." },
  { n: 3, title: "Finding Joy in Chaos", teaser: "Balancing ambition, self-care, and spontaneity." }
].map((ep) => (
  <article key={ep.n} className="group rounded-3xl overflow-hidden border hover:shadow-lg transition-shadow">
    <div className="aspect-video overflow-hidden">
      <img
        src={`/episode.jpg`}
        alt={`Artwork for ${ep.title}`}
        className="w-full h-full object-cover"
      />
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
