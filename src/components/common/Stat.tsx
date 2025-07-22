import { useUser } from "../../context/UserContext";
import type { userInfo } from "../../types/UserTypes";

export default function Stat({ title }: { title: string }) {
  const { user } = useUser();
  type UserKey = keyof userInfo;
  const stat: UserKey = title.toLowerCase() as UserKey; // Assuming user object has properties like followers, following, location
  return (
    <div className="flex bg-secondary-color rounded-xl text-body sm:text-title text-primary-font w-fit py-4 px-4 gap-1 items-center justify-center">
      <p>{title}</p>
      <hr className="rotate-90 w-10 text-gray-500 " />
      <p>
        {stat === "location"
          ? user?.[stat]
            ? user[stat]
            : "Not specified"
          : user
          ? user[stat]
          : "Not specified"}
      </p>
    </div>
  );
}
