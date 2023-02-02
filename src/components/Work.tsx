type RoleProps = {
   company: string;
   logo: string;
   role: string;
   date: string;
   dateShort: string;
};

const Role = ({ company, logo, role, date, dateShort }: RoleProps) => {
   return (
      <div className="flex items-start gap-4 border-b-2 border-dotted border-text-tertiary py-4">
         <img className="w-12 h-12 rounded-sm" src={logo} />
         <div>
            <h3 className="font-black text-text-primary">{company}</h3>
            <h4 className="font-thin">{role}</h4>
         </div>
         <span className="hidden md:block ml-auto">{date}</span>
         <span className="ml-auto md:hidden">{dateShort}</span>
      </div>
   );
};

const Work = () => {
   return (
      <>
         <h2 className="text-text-primary font-normal mt-12">Work</h2>
         <ul className="text-text-secondary mt-4">
            <li>
               <Role
                  logo="/assets/100devs.png"
                  company="100 Devs"
                  role="Software Engineer"
                  date="Jan 2022 — Present"
                  dateShort="Current"
               />
            </li>
            <li>
               <Role
                  logo="/assets/attri.png"
                  company="Attri Enterprises"
                  role="Software Engineer (Freelance)"
                  date="May 2022 — Sep 2022"
                  dateShort="2022"
               />
            </li>
         </ul>
      </>
   );
};

export default Work;
