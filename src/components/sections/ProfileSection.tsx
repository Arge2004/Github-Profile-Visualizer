import { useUser } from "../../context/UserContext";
import Skeleton from "@mui/material/Skeleton";


export default function ProfileSection() {
  const { user, loading } = useUser();
  return (
    <section className="ml-7 text-primary-font mb-10 2xl:mb-5 text-lg flex flex-col gap-2">
        {loading ? (
          <>
            <Skeleton variant="text" width="40%" height={40} />
            <Skeleton variant="text" width="50%" height={20} />
          </>
        ) : (
          <>
            <strong>{user?.name || user?.login}</strong>
            <p className="text-body">{user?.bio || "No biography available"}</p>
          </>
        )}
    </section>
  )
}
