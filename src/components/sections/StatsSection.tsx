import ProfileImg from "../common/ProfileImg";
import Stat from "../common/Stat";
import { useUser } from "../../context/UserContext";
import Skeleton from "@mui/material/Skeleton";

export default function StatsSection() {
  const { loading } = useUser();
  return (
    <section className="relative">
      <div className="absolute -translate-y-1/2 left-6 sm:left-12 max-w-fit">
        {loading ? (
          <Skeleton variant="rounded" width={120} height={120} />
        ) : (
          <>
            <ProfileImg></ProfileImg>
          </>
        )}
      </div>

      {loading ? (
        <div className="flex flex-wrap pt-[15%] min-[1110px]:pt-3 min-[1110px]:ps-50 mb-10 2xl:mb-5 ml-7 gap-3 align-middle w-4/5">
          <Skeleton>
            <Stat title="Followers"></Stat>
          </Skeleton>
          <Skeleton>
            <Stat title="Following"></Stat>
          </Skeleton>
          <Skeleton>
            <Stat title="Location"></Stat>
          </Skeleton>
        </div>
      ) : (
        <div className="flex flex-wrap pt-[15%] min-[1110px]:pt-3 min-[1110px]:ps-50 mb-10 2xl:mb-5 ml-7 gap-3 align-middle w-4/5">
          <Stat title="Followers"></Stat>
          <Stat title="Following"></Stat>
          <Stat title="Location"></Stat>
        </div>
      )}
    </section>
  );
}
