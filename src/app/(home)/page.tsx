import Navbar from "@/components/Navbar";
import SearchComponent from "@/components/SearchComponent";
import MainBlogSection from "./(components)/MainBlogSection";

export default function Home() {
  return (
    <main>
      <Navbar/>

      <SearchComponent/>

      <MainBlogSection/>
    </main>
  );
}
