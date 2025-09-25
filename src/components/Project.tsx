import React, { FC } from "react";
import { StaticImageData } from "next/image";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    src: StaticImageData;
    color: string;
  };
  setModal: (modal: { active: boolean; index: number }) => void;
}

const Project: FC<ProjectProps> = ({ project, setModal }) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-300 py-8 px-16 cursor-pointer transition-all duration-300 hover:px-14 hover:opacity-40 ">
      <div className="flex items-center justify-between w-full gap-5">
        <h2 className="text-3xl font-semibold">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
