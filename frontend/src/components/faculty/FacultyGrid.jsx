import FacultyCard from "./FacultyCard";
import SectionHeading from "../common/SectionHeading";

const facultyMembers = [
  {
    id: 1,
    name: "Mrs. Anjali Sharma",
    role: "Senior Teacher",
    subject: "English",
    experience: "10+ Years",
    description:
      "Dedicated to helping students develop strong communication, reading, and writing skills.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    id: 2,
    name: "Mr. Rahul Verma",
    role: "Mathematics Teacher",
    subject: "Mathematics",
    experience: "8+ Years",
    description:
      "Focused on making mathematics easier to understand through practical examples and problem-solving.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },
  {
    id: 3,
    name: "Mrs. Priya Singh",
    role: "Science Teacher",
    subject: "Science",
    experience: "7+ Years",
    description:
      "Encouraging curiosity and scientific thinking through interactive learning and activities.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    id: 4,
    name: "Mr. Aman Kumar",
    role: "Social Studies Teacher",
    subject: "Social Studies",
    experience: "6+ Years",
    description:
      "Helping students understand history, geography, society, and the world around them.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  {
    id: 5,
    name: "Mrs. Neha Gupta",
    role: "Primary Teacher",
    subject: "Primary Education",
    experience: "9+ Years",
    description:
      "Creating a supportive and engaging learning environment for young students.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  },
  {
    id: 6,
    name: "Mr. Vikram Singh",
    role: "Computer Teacher",
    subject: "Computer Education",
    experience: "5+ Years",
    description:
      "Helping students build digital awareness and develop essential technology skills.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
  },
];

const FacultyGrid = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Teachers"
          title="Meet Our Dedicated Faculty"
          description="Our experienced and caring teachers are committed to guiding students throughout their learning journey."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid;
