import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { LandingPage } from "@/components/landingPage";

export default function Home() {
  return (
    <div>
      <Navbar title="Nav Bar title (or logo?)"></Navbar>
      <LandingPage></LandingPage>
      <Footer year="2024" title="Footer title text" ></Footer>
    </div>
  );
}
