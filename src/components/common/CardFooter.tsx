import licenceIcon from "../../assets/Chield_alt.svg";
import forkIcon from "../../assets/Nesting.svg";
import starIcon from "../../assets/Star.svg";

type props = {
  license: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
};

function updatedAgo(fechaISO: string): string {
  const fecha = new Date(fechaISO);
  const ahora = new Date();
  const segundos = Math.floor((ahora.getTime() - fecha.getTime()) / 1000);

  const intervalos: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (const [segundosUnidad, nombre] of intervalos) {
    const cantidad = Math.floor(segundos / segundosUnidad);
    if (cantidad >= 1) {
      const plural = cantidad > 1 ? "s" : "";
      return `Updated ${cantidad} ${nombre}${plural} ago`;
    }
  }
  return "Updated a few seconds ago";
}

export default function CardFooter({
  license,
  stars,
  forks,
  updatedAt,
}: props) {
  const formattedDate = updatedAgo(updatedAt);
  return (
    <div className="flex flex-wrap gap-6 text-secondary-font">
      {license && (
        <p className="flex items-center justify-center gap-1 min-w-fit">
          <img src={licenceIcon} alt="License Icon" />
          {license}
        </p>
      )}
      <p className="flex items-center justify-center gap-1 min-w-fit  ">
        <img src={starIcon} alt="Stars Icon" />
        {stars}
      </p>
      <p className="flex items-center justify-center gap-1 min-w-fit">
        <img src={forkIcon} alt="Forks Icon" />
        {forks}
      </p>
      <p>{formattedDate}</p>
    </div>
  );
}
