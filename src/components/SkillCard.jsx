import React from 'react';

const SkillCard = ({ skill }) => {
    const { skillName, skillDescription, icon: Icon } = skill;

    return (
        <div className=" rounded-lg overflow-hidden  ">
            <div className="p-4 flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-myBlack mb-4" />
                <h2 className="text-lg font-bold font-otterco text-center">{skillName}</h2>
                <p className="text-myBlack font-otterco text-lg  text-center">{skillDescription}</p>
            </div>
        </div>
    );
};

export default SkillCard;
