import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import ImageUploader from "../../components/admin/ImageUploader";

const initialImages = [
  {
    id: 1,
    title: "Classroom Activity",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d",
  },
  {
    id: 2,
    title: "Sports Activity",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
  },
  {
    id: 3,
    title: "School Learning",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

const ManageGallery = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);

  const deleteImage = (id) => {
    setImages((previous) => previous.filter((image) => image.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Manage Gallery
      </h1>

      <p className="mt-2 text-slate-500">
        Upload and manage images displayed on the school website.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <ImageUploader
          value={selectedImage}
          onChange={setSelectedImage}
          label="Upload New Gallery Image"
        />

        <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          <Plus size={18} />
          Add to Gallery
        </button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />

            <div className="flex items-center justify-between p-4">
              <h2 className="font-semibold text-slate-900">{item.title}</h2>

              <button
                onClick={() => deleteImage(item.id)}
                className="rounded-lg bg-red-50 p-2 text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGallery;
