import SearchInput from "../common/SearchInput";


export default function Header() {
  return (
    <header className="bg-[url('public/background.jpg')] h-[240px] bg-cover min-[1250px]:bg-contain bg-center pt-8 ">
        <SearchInput></SearchInput>
    </header>
  )
}
