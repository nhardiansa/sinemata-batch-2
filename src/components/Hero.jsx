export default function Hero() {
  return (
    <section className="hero mt-4 h-fit">
      <div className="hero-wrapper max-w-7xl mx-auto relative h-[400px]">
        <div className="image-wrapper absolute w-full h-full">
          <img
            src="https://image.tmdb.org/t/p/original//2I1OFQJ0L9T0dpU6FobKFWV2PxX.jpg"
            alt="Movie Title"
            className="w-full h-full object-cover rounded-xl shadow-lg object-top inset-0"
          />
          <div className="filter absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-xl"></div>
        </div>

        <div className="typo-cta py-10 font-primary absolute pl-12 text-white absolute">
          <div className="badge py-1 px-2 max-w-fit rounded-sm bg-amber-600/20 border border-amber-600/40">
            <span className="badge-text font-bold text-xs text-amber-600">
              FEATURED THIS WEEK
            </span>
          </div>
          <div className="title mt-[18px]">
            <h1 className="text-5xl font-bold font-secondary">
              CHRONOS LETTERBOUND
            </h1>
          </div>
          <div className="metadata text-sm flex gap-3 items-center mt-3">
            <div className="rating text-amber-600 flex items-center gap-1">
              <span className="star text-lg">★</span>
              <span className="rating-value">8.5</span>
            </div>
            <div className="movie-data text-slate-400">
              2024 · 2h 18m · Sci-Fi · Drama
            </div>
          </div>
          <div className="short-description mt-4">
            <p className="max-w-md text-sm leading-normal text-slate-400">
              Seorang penjaga arsip menemukan surat-surat dari masa depan yang
              ditulis untuknya — masing-masing meminta keputusan mustahil.
            </p>
          </div>
          <div className="cta mt-4 flex gap-3">
            <button className="cursor-pointer py-3 px-6 text-slate-950 bg-amber-600 hover:bg-amber-700 transition-colors rounded-lg font-bold">
              ▶ Lihat Detail
            </button>
            <button className="cursor-pointer py-3 px-6 text-white bg-white/10 hover:bg-white/20 transition-colors border border-[#3A4049] rounded-lg font-bold">
              + Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
