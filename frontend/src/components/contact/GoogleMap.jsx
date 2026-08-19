const GoogleMap = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Find Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Visit Alliance School
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Find our school location and plan your visit.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            title="Alliance School Location"
            src="YOUR_GOOGLE_MAP_EMBED_URL"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
