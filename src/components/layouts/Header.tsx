import SearchInput from "../common/SearchInput";
import ProfileImg from "../common/ProfileImg";
import { useUser } from "../../context/UserContext";


export default function Header() {
  const {user,} = useUser();
  return (
    <div className="relative">
    <header className="bg-[url('/background.jpg')] h-[240px] bg-cover min-[1250px]:bg-contain bg-center pt-8 ">
        <SearchInput></SearchInput>
    </header>
    { !user && 
    <div className="absolute -translate-y-1/2 left-6 sm:left-12 max-w-fit">
        <ProfileImg></ProfileImg>
    </div>
   }
    </div>
  )
}
