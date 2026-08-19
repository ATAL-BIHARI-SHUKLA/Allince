const GalleryItem = ({ image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img
        src={image.image}
        alt={image.title}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
          {image.category}
        </span>

        <h3 className="mt-2 text-lg font-semibold text-white">{image.title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
