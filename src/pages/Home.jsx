import "../App.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Photo from "../components/Photo";
import ServiceCard from "../components/ServiceCard";
import info from "../assets/info.json";
import StairTransition from "../components/StairTransition";
function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-col  gap-5 w-full justify-center items-center lg:flex-row lg:items-start mt-8 xl:h-screen">
        <Intro />
        <Photo />
      </div>
      <div className="mt-20 p-8 flex flex-col gap-3 xl:grid-cols-2 xl:grid xl:gap-10 xl:h-screen">
        {info.services.map((service, index) => (
          <ServiceCard
            key={index}
            number={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <StairTransition />
    </div>
  );
}

export default Home;
