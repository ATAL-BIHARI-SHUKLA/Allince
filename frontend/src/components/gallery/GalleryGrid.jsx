import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import GalleryFilter from "./GalleryFilter";
import GalleryItem from "./GalleryItem";

const galleryImages = [
  {
    id: 1,
    title: "Interactive Classroom Learning",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d",
  },
  {
    id: 2,
    title: "Students Learning Together",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    id: 3,
    title: "Creative School Activities",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
  },
  {
    id: 4,
    title: "Sports and Physical Activities",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
  },
  {
    id: 5,
    title: "Learning and Exploration",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },
  {
    id: 6,
    title: "School Library",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 7,
    title: "Group Learning Activity",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
  },
  {
    id: 8,
    title: "Celebrating Student Success",
    category: "Achievements",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5",
  },
  {
    id: 9,
    title: "Fun Learning Environment",
    category: "School Life",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

const categories = [
  "All",
  "Academics",
  "Classroom",
  "Activities",
  "Sports",
  "Facilities",
  "Achievements",
  "School Life",
];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Gallery"
          title="Life at Alliance School"
          description="Explore moments from our classrooms, activities, events, facilities, and everyday school life."
        />

        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-slate-500">
              No images available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
