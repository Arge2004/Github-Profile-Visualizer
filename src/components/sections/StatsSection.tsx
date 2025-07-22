import ProfileImg from "../common/ProfileImg";
import Stat from "../common/Stat";
export default function StatsSection() {
  return (
    <section className="relative">
      <div className="absolute -translate-y-1/2 left-6 sm:left-12 max-w-fit">
        <ProfileImg></ProfileImg>
      </div>
      <div className="flex flex-wrap pt-[15%] min-[1110px]:pt-3 min-[1110px]:ps-50 mb-10 2xl:mb-5 ml-7 gap-3 align-middle w-4/5">
        <Stat title="Followers"></Stat>
        <Stat title="Following"></Stat>
        <Stat title="Location"></Stat>
      </div>
    </section>
  );
}
