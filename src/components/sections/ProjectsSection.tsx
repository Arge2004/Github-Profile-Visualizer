import { useUser } from "../../context/UserContext";
import type { repository, repositoriesInfo } from "../../types/UserTypes";
import Card from "../common/Card";
import Skeleton from "@mui/material/Skeleton";

export default function ProjectsSection({
  repositories,
}: {
  repositories: repositoriesInfo;
}) {
  const { user, loading } = useUser();
  const repositoriesLength = repositories.length;
  const repositoryEmpty: repository = {
    name: "",
    html_url: "",
    description: "",
    license: null,
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  };

  // Limitar a 6 repositorios
  return (
    <section className="flex flex-col gap-10 items-center justify-center">
      {loading ? (
        <>
          <div className="flex flex-wrap gap-4 sm:gap-10 justify-center align-middle w-11/12">
            {Array.from(Array(4)).map((_, index) => (
              <Skeleton>
                <Card key={index} repository={repositoryEmpty} />
              </Skeleton>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap gap-4 sm:gap-10 justify-center align-middle w-11/12">
            {repositories.map((repo: repository) => (
              <Card key={repo.name} repository={repo} />
            ))}
          </div>
          <p className={`mb-10 ${repositoriesLength > 4 ? "2xl:mb-8" : ""}`}>
            <a
              className="text-primary-font text-title font-bold"
              href={user?.html_url}
            >
              View all repositories
            </a>
          </p>
        </>
      )}
    </section>
  );
}
