"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
  const modalRef = useRef(null);
  const viewRef = useRef(null);
  const viewTextRef = useRef(null);

  // Modal visibility
  gsap.set(modalRef.current, { autoAlpha: 1 });

  // Modal and view follow the mouse animation
  useGSAP(() => {
    const moveModalXTo = gsap.quickTo(modalRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveModalYTo = gsap.quickTo(modalRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveViewXTo = gsap.quickTo(viewRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveViewYTo = gsap.quickTo(viewRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    const moveViewTextXTo = gsap.quickTo(viewTextRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveViewTextYTo = gsap.quickTo(viewTextRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      moveModalXTo(clientX);
      moveModalYTo(clientY);

      moveViewXTo(clientX);
      moveViewYTo(clientY);

      moveViewTextXTo(clientX);
      moveViewTextYTo(clientY);
    });
  });

  // Modal Scale animation
  useGSAP(() => {
    if (modal.active) {
      gsap.to(modalRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power3",
      });
    } else {
      gsap.to(modalRef.current, {
        scale: 0,
        duration: 0.4,
        ease: "power3",
      });
    }
  }, [modal.active]);

  return (
    <div
      ref={modalRef}
      className="absolute flex justify-center items-center w-fit h-[250px] overflow-hidden pointer-events-none invisible"
    >
      <div
        ref={viewRef}
        className="fixed top-0 left-0 bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center z-10"
      >
        <span ref={viewTextRef}>View</span>
      </div>
      <div
        className="flex flex-col w-full h-full transition-all duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]"
        // Animation of the slide in the modal
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
