import Skill from "./Skill";

const Skills = () => {
   return (
      <div className="flex gap-2 flex-wrap text-text-primary mt-12">
         <Skill
            title="TypeScript"
            icon="devicon-typescript-plain"
            textColor="text-[#007acc]"
         />
         <Skill
            title="JavaScript"
            icon="devicon-javascript-plain"
            textColor="text-[#e4d04b]"
         />
         <Skill
            title="MongoDB"
            icon="devicon-mongodb-plain"
            textColor="text-[#439934]"
         />
         <Skill
            title="Express"
            icon="devicon-express-original"
            textColor="text-[#fefefe]"
         />
         <Skill
            title="React"
            icon="devicon-react-original"
            textColor="text-[#0f82a2]"
         />
         <Skill
            title="Node.JS"
            icon="devicon-nodejs-plain"
            textColor="text-[#3b7f3a]"
         />
         <Skill
            title="PostgreSQL"
            icon="devicon-postgresql-plain"
            textColor="text-[#336791]"
         />
         <div className={`flex items-center gap-[.3rem] p-1 rounded-sm`}>
            <img className="w-4 h-4" src="/assets/prisma.png" />
            <h4 className="text-xs">Prisma</h4>
         </div>
      </div>
   );
};

export default Skills;
