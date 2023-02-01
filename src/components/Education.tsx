type SchoolProps = {
   logo: string;
   name: string;
   major: string;
   date: string;
   dateShort: string;
};

const School = ({ logo, name, major, date, dateShort }: SchoolProps) => {
   return (
      <div className="flex items-start gap-4 border-b-2 border-dotted border-text-tertiary py-4">
         <img className="w-12 h-12 rounded-sm" src={logo} />
         <div>
            <h3 className="font-black text-text-primary">{name}</h3>
            <h4 className="font-thin">{major}</h4>
         </div>
         <span className="hidden md:block ml-auto">{date}</span>
         <span className="ml-auto md:hidden">{dateShort}</span>
      </div>
   );
};

const Education = () => {
   return (
      <>
         <h2 className="text-text-primary font-normal mt-12">Education</h2>
         <ul className="text-text-secondary mt-4">
            <li>
               <School
                  logo="/assets/ncc.png"
                  name="Nassau Community College"
                  major="Computer Science"
                  date="Sept 2017 — Dec 2021"
                  dateShort="2017-2021"
               />
            </li>
         </ul>
      </>
   );
};

export default Education;
