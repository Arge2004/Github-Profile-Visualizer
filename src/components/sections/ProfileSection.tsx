import { useUser } from "../../context/UserContext";

export default function ProfileSection() {
  const { user } = useUser();
  return (
    <section className="ml-7 text-primary-font mb-10 2xl:mb-5 text-lg flex flex-col gap-2">
        <strong>{user?.name || user?.login}</strong>
        <p className="text-body">{user?.bio || "No biography available"}</p>
    </section>
  )
}
