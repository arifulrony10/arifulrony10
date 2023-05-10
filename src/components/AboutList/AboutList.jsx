import Point from './Point';

const AboutList = ({ aboutList }) => {
  const {
    companyLogo,
    position,
    companyWebsite,
    companyName,
    workDescription,
    keyPoints,
  } = aboutList;
  return (
    <article className='flex justify-center items-center gap-8 w-3/4 items-center mx-auto mb-10'>
      <img
        src={companyLogo}
        alt=''
        className='max-w-[80px] bg-gray-800 rounded-full p-5'
      />
      <div>
        <h4 className='font-bold'>
          {position} at{' '}
          <a
            href={companyWebsite}
            className='text-blue-400 hover:text-blue-600'
            target='_blank'
          >
            {companyName}
          </a>
        </h4>
        <p>{workDescription}</p>
        <ul className='list-disc ml-5'>
          {keyPoints.length !== 0 &&
            keyPoints.map((point) => <Point key={point.id} point={point} />)}
        </ul>
      </div>
    </article>
  );
};
export default AboutList;
