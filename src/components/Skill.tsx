type SkillProps = {
   icon: string;
   textColor: string;
   title: string;
};

const Skill = ({ icon, title, textColor }: SkillProps) => {
   return (
      <div className={`flex items-center gap-[.3rem] p-1 rounded-sm`}>
         <i className={`${icon} ${textColor}`}></i>
         <h4 className="text-xs">{title}</h4>
      </div>
   );
};

export default Skill;
