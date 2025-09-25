import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Array<{
    title: string;
    description: string;
    src: StaticImageData;
    color: string;
  }>;
}

const Modal: FC<ModalProps> = ({ modal, projects }) => {
  return (
    <div className="absolute flex justify-center items-center w-[400px] h-[450px] overflow-hidden">
      <div className="flex flex-col justify-start w-full h-full">
        {projects.map((project, index) => {
          return (
            <div
              key={`modal-${index}`}
              className={`flex items-center justify-center h-[400px]`}
              style={{ backgroundColor: project.color }}
            >
              <div className="relative flex items-center justify-center h-[300px] w-[300px] overflow-hidden">
                <Image
                  src={project.src}
                  alt={`${project.title} image`}
                  width={300}
                  height={0}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
