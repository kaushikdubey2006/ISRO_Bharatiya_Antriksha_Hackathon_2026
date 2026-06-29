import LandingLayout from "../Layouts/LandingLayout";
import Hero from "../components/landing/Hero";
import ModuleSelection from "../components/landing/ModuleSelection";

function Home() {
  return (
    <LandingLayout>
      <Hero />
      <ModuleSelection />
    </LandingLayout>
  );
}

export default Home;