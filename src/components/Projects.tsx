type ProjectProps = {
   link: string;
   title: string;
   description: string;
   year: string;
};

const Project = ({ link, title, description, year }: ProjectProps) => {
   return (
      <a className="flex items-center gap-2" href={link}>
         <h2 className="font-black text-text-primary">{title}</h2>
         <p className="hidden lg:block font-thin">{description}</p>
         <div className="flex-1 mx-1 border-t-2 border-dotted border-text-tertiary"></div>
         <h3>{year}</h3>
      </a>
   );
};

const Projects = () => {
   return (
      <>
         <h2 className="text-text-primary font-normal mt-12">Projects</h2>
         <ul className="w-full p-4 bg-bg-secondary rounded-md text-text-secondary flex flex-col gap-4 font-scope mt-8">
            <li>
               <Project
                  link="#"
                  title="Who's that pokemon?"
                  description="This is what it does"
                  year="2023"
               />
            </li>
            <li>
               <Project
                  link="#"
                  title="Changelog"
                  description="This is what it does"
                  year="2023"
               />
            </li>
            <li>
               <Project
                  link="#"
                  title="Climber's Connect"
                  description="This is what it does"
                  year="2022"
               />
            </li>
            <li>
               <Project
                  link="#"
                  title="Timeato"
                  description="This is what it does"
                  year="2022"
               />
            </li>
            <li>
               <Project
                  link="#"
                  title="Find a Dev"
                  description="This is what it does"
                  year="2022"
               />
            </li>
            <li>
               <Project
                  link="#"
                  title="Attri Enterprises"
                  description="This is what it does"
                  year="2022"
               />
            </li>
            <li>
               <Project
                  link="#"
                  title="Coding Resources API"
                  description="This is what it does"
                  year="2022"
               />
            </li>
         </ul>
      </>
   );
};

export default Projects;
