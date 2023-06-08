import { Chrono } from "react-chrono";
const TimelineComponent = () => {
  const customContent = [
    <div>
      <h2 className="fs-5">Senior Data Management Assistant</h2>
      <div>
        Research Administration,{" "}
        <a
          href="https://icddrb.org"
          target="_black"
          className="fw-bold text-decoration-none"
        >
          icddr,b
        </a>
      </div>

      <p>
        A global health research institute in Dhaka, Bangladesh, dedicated to
        innovative scientific research to solve public health challenges through
        various methodologies.
      </p>
      <ul>
        <li>
          Review and follow up on protocol applications, ensuring completeness.
        </li>
        <li>Assist in evaluating and approving protocols for the IRB.</li>
        <li>Proactively enter protocol data and generate reports.</li>
        <li>Support funding opportunity search and summary.</li>
        <li>Maintain proposal database and provide reports.</li>
        <li>Track ERP actions and provide support throughout its phases.</li>
      </ul>
    </div>,
    <div>
      <h2 className="fs-5">Intern</h2>
      <div>
        Software Development Team, IT,{" "}
        <a
          href="https://www.waltonhil.com/"
          target="_black"
          className="fw-bold text-decoration-none"
        >
          Walton Hi-Tech Industries PLC
        </a>
      </div>
      <p>
        Walton is one of the largest industries in Bangladesh. They have over a
        hundred outlets across the country. Moreover, there are different types
        of outlets. So, build a solution for the customer, using which one can
        easily locate the nearest desired type of outlet.
      </p>
      <ul>
        <li>Recreate an solution for locating nearest outlet.</li>
        <li>Work with the UI/UX team to make it pixel perfect. •</li>
        <li>Optimized for better performance.</li>
        <li>Merger data from multiple database sources.</li>
        <li>Build RESTful API for Walton Plaza.</li>
      </ul>
    </div>,
  ];

  return (
    <Chrono
      readMore={true} // enables the readMore function for larger chunks of text
      items={[
        {
          title: "March 2023",
          //   cardTitle: "Senior Data Management Assistant",
          //   url: "https://www.icddrb.org/",
          //   cardSubtitle: "icddr,b",
        },
        {
          title: "July 2022",
          //   cardTitle: "Intern at Software Development Team",
          //   cardSubtitle: `Walton Hi-Tech Industries PLC`,
          //   url: "https://www.waltonhil.com/",
        },
      ]}
      mode="VERTICAL"
      theme={{
        primary: "#222",
        secondary: "blue",
        cardBgColor: "white",
        cardForeColor: "black",
        titleColor: "#222",
        titleColorActive: "white",
      }}
      outline
    >
      {customContent}
    </Chrono>
  );
};
export default TimelineComponent;
