import {
  BookOpen,
  Monitor,
  FlaskConical,
  Trophy,
  ShieldCheck,
  Bus,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    id: 1,
    icon: BookOpen,
    title: "School Library",
    description:
      "A learning space with books and educational resources that encourage students to read, explore, and expand their knowledge.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 2,
    icon: Monitor,
    title: "Smart Classrooms",
    description:
      "Modern classrooms designed to make learning more interactive, engaging, and easier to understand.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d",
  },
  {
    id: 3,
    icon: FlaskConical,
    title: "Science Learning",
    description:
      "Practical activities and experiments that help students understand scientific concepts through experience.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },
  {
    id: 4,
    icon: Trophy,
    title: "Sports & Activities",
    description:
      "Opportunities for students to participate in sports, games, competitions, and physical activities.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Safe Campus",
    description:
      "A secure, supportive, and child-friendly environment where students can learn and grow with confidence.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    id: 6,
    icon: Bus,
    title: "Transport Facility",
    description:
      "Safe and convenient transportation support for students, subject to the school's available routes and services.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
];

const FacilitiesGrid = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="School Facilities"
          title="A Supportive Environment for Every Student"
          description="Our facilities are designed to support academic learning, creativity, physical development, safety, and overall student growth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;
