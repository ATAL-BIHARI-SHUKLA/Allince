import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d",
    alt: "Students in classroom",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    alt: "Students learning",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    alt: "School library",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    alt: "Student activity",
  },
];

const GalleryPreview = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            badge="School Gallery"
            title="Moments From Alliance School"
            description="A glimpse into the learning, activities, and memorable experiences of our students."
            align="left"
          />

          <Link
            to="/gallery"
            className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600 hover:gap-3"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <Link
              key={image.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
