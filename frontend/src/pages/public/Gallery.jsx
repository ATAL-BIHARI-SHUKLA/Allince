import PageHero from "../../components/common/PageHero";
import GalleryGrid from "../../components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <>
      <PageHero
        title="School Gallery"
        subtitle="Explore moments, activities, events, and memories from Alliance School."
      />

      <GalleryGrid />
    </>
  );
};

export default Gallery;
