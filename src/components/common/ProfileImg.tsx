import { useUser } from "../../context/UserContext";

export default function ProfileImg() {
  const { user } = useUser();
  const src: string = user?.avatar_url
    ? user.avatar_url
    : "/default-profile.webp";

  return (
    <img
      src={src}
      alt="Profile Image"
      className="max-w-1/4 w-100 2xl:w-120 sm:scale-130 shadow-lg rounded-xl object-cover border-8 border-primary-color bg-primary-color "
    />
  );
}
