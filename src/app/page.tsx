'use client'
import DownloadResume from "@/components/DownloadResume";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import SkillsSection from "@/components/SkillsSection";
import ThreeJSComponent from "@/components/ThreeJSComponent";

const skills = [
  {
    name: 'JavaScript',
    description: 'Front-end and back-end scripting language',
    icon: '/icons/js.png',
  },
  {
    name: 'React.js',
    description: 'JavaScript library for building user interfaces',
    icon: '/icons/react.png',
  },
  // Add more skills here
];

const Home = () => {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="">
        <div className="bg-slate-700 h-full"/>
      </div>
        <div className="">
          <HeroSection name="Bonwayinkosi Mdluli" tagline="I am a front-end developer & Mobile App developer who uses ReactJS with Next.js and React Native with Expo! All is written in TypeScript"/>
        </div>
        <div className=""><ThreeJSComponent /></div>
        <div className="">
          <SkillsSection skills={skills} />
        </div>
        <div className="">Navigation to the projects page</div>
        <div className="div"><EducationSection /></div>
        <div className=""><Marquee /></div>
        <div className=""><DownloadResume /></div>

    </div>

  );
};

export default Home;
