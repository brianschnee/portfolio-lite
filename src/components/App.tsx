import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";
import Work from "./Work";
import Experience from "./Experience";
import Education from "./Education";

const App = () => {
   return (
      <div className="h-full w-full min-h-screen flex flex-col items-center p-12 lg:p-28 bg-bg-primary">
         <div className="container flex flex-col justify-between w-full h-full lg:w-[55%] font-scope">
            <Experience startDate={"2018-01-16"} />
            <Header />
            <Summary />
            <Skills />
            <Work />
            <Projects />
            <Education />
            <Footer />
         </div>
      </div>
   );
};

export default App;
