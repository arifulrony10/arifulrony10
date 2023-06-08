import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectComponent = ({ project }) => {
  return (
    <div className='col' style={{ minWidth: '20rem' }}>
      <article className='card h-100 position-relative'>
        <img
          src={project?.image}
          alt=''
          className='card-img-top'
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className='card-body'>
          <h2 className='card-title text-center'>{project?.title}</h2>
          <p className='card-text'>{project?.description}</p>
          <ul>
            {project?.bullets &&
              project?.bullets.map((bullet) => (
                <li key={bullet.id}>{bullet?.point}</li>
              ))}
          </ul>
          <div className='d-flex flex-row gap-2 flex-wrap justify-content-center'>
            {project?.stacks &&
              project?.stacks?.map((stack) => {
                return (
                  <div className='badge bg-secondary  p-2' key={stack.id}>
                    {stack?.stackName}
                  </div>
                );
              })}
          </div>
          <div className='d-flex justify-content-around align-items-center my-2 flex-wrap gap-2 '>
            {project?.souceCodeUrl && (
              <a
                href={project.souceCodeUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary '
              >
                Source Code <HiOutlineExternalLink />
              </a>
            )}

            {project?.liveUrl && (
              <a
                href={project?.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-success'
              >
                View Live <HiOutlineExternalLink />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
export default ProjectComponent;
