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
  const translateY = modal.index * -100 + "%";

  return (
    <div className="absolute flex justify-center items-center w-fit h-[250px] overflow-hidden left-1/2 top-0 -translate-x-1/2">
      <div
        className="flex flex-col w-full h-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ transform: `translateY(${translateY})` }}
      >
        {projects.map((project, index) => {
          return (
            <div key={`modal-${index}`} className={`h-fit w-fit`}>
              <div
                className="relative flex items-center justify-center w-[300px] h-[250px] border-30"
                style={{ borderColor: project.color }}
              >
                <Image
                  src={project.src}
                  alt={`${project.title} image`}
                  fill
                  className="h-auto w-auto object-cover object-center"
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
