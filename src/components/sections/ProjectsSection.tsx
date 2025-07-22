import { useUser } from "../../context/UserContext";
import {useFetchRepositories} from "../../hooks/UseGetInfo";
import type { repository } from "../../types/UserTypes";
import Card from "../common/Card";



export default function ProjectsSection() {
  const {user} = useUser();
  const {repositories} = useFetchRepositories();
  const repositoriesLength = repositories.length;
  
  if (!user) {
    return <p className="text-primary-font text-title">No user data available</p>;
  }
  
   // Limitar a 6 repositorios
  return (
    <section className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-wrap gap-4 sm:gap-10 justify-center align-middle w-11/12">
          {
            repositories.map((repo:repository) => 
              <Card key={repo.name} repository={repo} />
            )
          }
        </div>
        <p className={`mb-10 ${repositoriesLength > 4 ? "2xl:mb-8" : ""}`}><a className="text-primary-font text-title font-bold" href={user?.html_url}>View all repositories</a></p>

    </section>
  )
}
