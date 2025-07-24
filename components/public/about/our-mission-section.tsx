import AboutWrapper from "@/components/public/about/about-wrapper";
import React from "react";

export default function OurMissionSection() {
  const missions: { mission: string; desc: string }[] = [
    {
      mission: "Offering a diverse range of genres",
      desc: "From classic novels, self-help books, children's literature, to specialized texts and graphic novels - we constantly update our collection to bring you the richest and highest quality choices.",
    },
    {
      mission: "Ensuring quality",
      desc: "Every book is carefully selected, guaranteed to be original, clear, and of the best possible quality.",
    },
    {
      mission: "Creating an easy and enjoyable shopping experience",
      desc: "With a user-friendly website interface and dedicated customer service, we want every visit to Shop to be a satisfying experience.",
    },
    {
      mission: "Building a reading community",
      desc: "We aspire to be more than just a bookshop; we aim to be a place that connects like-minded souls, sharing the joy of reading.",
    },
  ];

  return (
    <AboutWrapper header="Our Mission" className="flex-center flex-col">
      <div className="text-center mb-4">
        Our mission is to inspire and foster a love for reading within the
        community. We are committed to:
      </div>

      <ul className="grid grid-cols-4 gap-6">
        {missions.map((item) => (
          <li
            key={item.mission}
            className="flex-center flex-col gap-4 p-4 rounded-2xl border-2 border-muted hover:border-foreground duration-300"
          >
            <header className="text-xl font-bold">{item.mission}</header>
            <p className="text-muted-foreground">{item.desc}</p>
          </li>
        ))}
      </ul>
    </AboutWrapper>
  );
}
