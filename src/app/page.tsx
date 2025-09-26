"use client";

import fortnite from "/public/assets/images/fortnite-mercenary-kor.jpg";
import callOfDuty from "/public/assets/images/call-of-duty.jpg";
import theFinals from "/public/assets/images/the-finals.jpg";
import apexLegends from "/public/assets/images/apex-legends.jpg";
import gtaV from "/public/assets/images/gta-v.jpg";
import { useState } from "react";
import Project from "@/components/Project";
import Modal from "@/components/Modal";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Fortnite",
      description: "Description 1",
      src: fortnite,
      color: "#9C141B",
    },
    {
      id: 2,
      title: "Call of Duty Mobile",
      description: "Description 2",
      src: callOfDuty,
      color: "#FFE708",
    },
    {
      id: 3,
      title: "The Finals",
      description: "Description 3",
      src: theFinals,
      color: "#615A65",
    },
    {
      id: 4,
      title: "Apex Legends",
      description: "Description 4",
      src: apexLegends,
      color: "#000000",
    },
    {
      id: 5,
      title: "GTA V",
      description: "Description 5",
      src: gtaV,
      color: "#497C22",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="h-screen">
      <div className="flex flex-col h-full justify-center max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Project key={index} project={project} setModal={setModal} />
        ))}
        <Modal modal={modal} projects={projects} />
      </div>
    </main>
  );
}
