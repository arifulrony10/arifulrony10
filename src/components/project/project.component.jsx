import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectComponent = ({ project }) => {
  return (
    <div className='col-md' style={{ minWidth: '20rem', maxWidth: '25rem' }}>
      <article className='card h-100 position-relative'>
        <img
          src={project?.image}
          alt=''
          className='card-img-top'
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className='card-body d-flex flex-column'>
          <h2 className='card-title text-center'>{project?.title}</h2>
          <p className='card-text'>{project?.description}</p>
          <ul>
            {project?.bullets &&
              project?.bullets.map((bullet) => (
                <li key={bullet.id}>{bullet?.point}</li>
              ))}
          </ul>
          <div className='d-flex flex-row gap-2 flex-wrap justify-content-center mb-2 mt-auto'>
            {project?.stacks &&
              project?.stacks?.map((stack) => {
                return (
                  <div
                    className='badge bg-light border p-2 text-dark'
                    key={stack.id}
                  >
                    {stack?.stackName}
                  </div>
                );
              })}
          </div>
          <div className='d-flex justify-content-around align-items-center flex-wrap gap-2 mt-auto'>
            {project?.souceCodeUrl && (
              <a
                href={project.souceCodeUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-primary '
              >
                Source Code <HiOutlineExternalLink />
              </a>
            )}

            {project?.liveUrl && (
              <a
                href={project?.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-danger'
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
