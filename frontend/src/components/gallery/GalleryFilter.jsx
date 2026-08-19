const GalleryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            activeCategory === category
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
