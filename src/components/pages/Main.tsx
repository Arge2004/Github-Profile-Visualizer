import Header from "../layouts/Header";
import StatsSection from "../sections/StatsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ProfileSection from "../sections/ProfileSection";
import { useUser } from "../../context/UserContext";

export default function Main() {
  const { user } = useUser();
  return (
    <div>
      <Header></Header>
      { user ?
      <main>
        <StatsSection></StatsSection>
        <ProfileSection></ProfileSection>
        <ProjectsSection></ProjectsSection>
      </main>
      :
      <div className="flex text-lg rounded-2xl font-bold bg-secondary-color w-4/5 mx-auto h-[200px] flex-col items-center justify-center mt-60 shadow-2xl">
        <p className="text-primary-font">Please search for a user to display their github profile.</p>
        <p className="text-primary-font">Example: "Arge2004"</p>
      </div>
      
      }
      
    </div>
  )
}
