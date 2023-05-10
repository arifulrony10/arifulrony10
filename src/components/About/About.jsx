import AboutList from '../AboutList/AboutList';

const About = () => {
  const aboutList = [
    {
      id: 1,
      companyLogo: 'https://i.ibb.co/XpgtS3y/icddrb.png',
      position: 'Senior Data Management Assistant',
      companyWebsite: 'https://www.icddrb.org/',
      companyName: 'ICDDR,B',
      workDescription: 'My key responsibilities are:',
      keyPoints: [
        {
          id: 1,
          point:
            "Receive the principle investigator's (PI) or designee's completed protocol application forms, review them in accordance with the protocol checklist, and get in touch with the PI or designee if any information or supporting paperwork is missing.",
        },
        {
          id: 2,
          point:
            'Assist the IRB office in evaluating and approving the protocol',
        },
        {
          id: 3,
          point: 'Proactively enter the protocol data into the system.',
        },
        {
          id: 4,
          point:
            'Create reports based on protocols and grants as needed for different purposes.',
        },
        {
          id: 5,
          point:
            'Aid Manager, RA in locating funding opportunities on various funding portals, as well as in understanding and summarizing the announcements.',
        },
        {
          id: 6,
          point:
            'Find new financing portals to subscribe to, while also renewing the icddr,b portals that are already in place.',
        },
        {
          id: 7,
          point:
            'Keep track of the submitted proposals in a database and produce reports for management as needed.',
        },
        {
          id: 8,
          point:
            "Maintain a record of each and every ERP-related action taken, and support the team during the ERP's piloting, testing, training, and go-live phases.",
        },
      ],
    },
    {
      id: 2,
      companyLogo: 'https://i.ibb.co/vYHZhnV/Walton.png',
      position: 'Intern',
      companyWebsite: 'https://waltonhil.com/',
      companyName: 'Walton Hi-Tech Industries PLC',
      workDescription:
        'My main objective was to duplicate an existing system while enhancing its usability and scalability. React is used for the front end, and Express JS is used for the back end, with MySQL as the database.',
      keyPoints: [],
    },
    {
      id: 3,
      companyLogo: 'https://i.ibb.co/SJ5qsXg/Kloudoop.png',
      position: 'Director of Technology',
      companyWebsite: 'https://kloudoop.com',
      companyName: 'Kloudoop Limited',
      workDescription:
        'Throughout my academic years, I served as the Director of Technology for Kloudoop Limited, a startup company. My key roles are:',
      keyPoints: [
        {
          id: 1,
          point:
            'Overseeing and evaluating all technological activities in accordance with established objectives.',
        },
        {
          id: 2,
          point:
            'Coming up with and implementing IT policies and systems to support the execution of strategies decided upon by the management.',
        },
        {
          id: 3,
          point:
            'Examining the business demands of all departments to identify their technology requirements',
        },
      ],
    },
  ];
  return (
    <div className=''>
      {aboutList.map((list) => (
        <AboutList key={list.id} aboutList={list} />
      ))}
    </div>
  );
};
export default About;
