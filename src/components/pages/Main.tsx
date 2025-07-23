import Header from "../layouts/Header";
import StatsSection from "../sections/StatsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ProfileSection from "../sections/ProfileSection";
import { useUser } from "../../context/UserContext";

export default function Main() {
  const { loading, user, repositories, notFound} = useUser();
 
  if (notFound) {
    return (
      <>
      <Header></Header>
      <div className="flex text-center lg:text-lg rounded-2xl font-bold bg-secondary-color w-fit lg:w-4/5 mx-auto p-8 flex-col items-center justify-center lg:mt-60 mt-30 shadow-2xl">
        <p className="text-primary-font">User not found. Please try again.</p>
      </div>
      </>
      
    );
  }

  return (
    <div>
      <Header></Header>
      { loading || user ?
      <main>
        <StatsSection></StatsSection>
        <ProfileSection></ProfileSection>
        <ProjectsSection repositories={repositories ?? []} ></ProjectsSection>
      </main>
      :
      <div className="flex text-center lg:text-lg rounded-2xl font-bold bg-secondary-color w-fit lg:w-4/5 sm:mx-auto mx-10 p-8 flex-col items-center justify-center lg:mt-60 mt-30 shadow-2xl">
        <p className="text-primary-font">Please search for a user to display their github profile.</p>
        <p className="text-primary-font">Example: "Arge2004"</p>
      </div>
      
      }
      
    </div>
  )
}
