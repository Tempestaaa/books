import AboutWrapper from "@/components/public/about/about-wrapper";

export default function ValuesSection() {
  const values = [
    "Passion",
    "Quanlity",
    "Dedication",
    "Innovation",
    "Community",
  ];

  return (
    <AboutWrapper header="Our Values">
      <p className="text-center">These values shape everything we do:</p>

      <ul className="grid grid-flow-col-dense">
        {values.map((item, id) => (
          <li
            key={id}
            className="grid-center border-2 border-muted py-8 hover:border-foreground duration-300 text-2xl uppercase cursor-default"
          >
            {item}
          </li>
        ))}
      </ul>
    </AboutWrapper>
  );
}
