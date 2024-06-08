import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MuscicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="text-white min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MuscicSchoolTestimonialCards />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
