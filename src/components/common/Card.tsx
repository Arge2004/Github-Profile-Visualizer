import CardFooter from "./CardFooter";
import type { repository } from "../../types/UserTypes";
import TextTruncate from "./TextTruncate";
import openArrow from "../../assets/open-arrow.svg";

type cardProps = {
  repository: repository;
};

export default function Card({ repository }: cardProps) {
  return (
    <article
      className="bg-linear-(--card-gradient) px-8 py-8 rounded-xl flex flex-col gap-4 
    justify-center align-middle min-w-full sm:min-w-0 sm:w-[600px]"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-title text-primary-font">{repository.name}</h3>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          <img className="scale-150 hover:cursor-pointer fill-primary-font" src={openArrow} alt="Arrow to open the repository" />
        </a>
      </div>
      <TextTruncate text={repository.description} />
      <CardFooter
        license={repository.license?.name || null}
        stars={repository.stargazers_count}
        forks={repository.forks_count}
        updatedAt={repository.updated_at}
      />
    </article>
  );
}
