import React from 'react';
import { Redirect } from 'react-router-dom';
import ShowProjectPersonal from './ShowProjectPersonal';
import { ShowProjectProfessional } from './ShowProjectProfessional';

const ProjectDetails = ({ location }) => {
  const title = location?.aboutProps?.title;
  const description = location?.aboutProps?.description;
  const developed = location?.aboutProps?.developed;
  const video = location?.aboutProps?.video;
  const imageDetail = location?.aboutProps?.imageDetail;
  const link = location?.aboutProps?.link;
  const githubLink = location?.aboutProps?.githubLink;
  const typeProject = location?.aboutProps?.typeProject;
  const workplaceName = location?.aboutProps?.workplaceName;
  const workplaceLogo = location?.aboutProps?.workplaceLogo;
  const devtools = location?.aboutProps?.devTools;
  const teams = location?.aboutProps?.teams;

  return (
    <>
      {!title && !developed ? (
        <Redirect to='/' />
      ) : typeProject === 'personal' ? (
        <ShowProjectPersonal
          title={title}
          description={description}
          developed={developed}
          video={video}
          imageDetail={imageDetail}
          link={link}
          githubLink={githubLink}
        />
      ) : (
        <ShowProjectProfessional
          title={title}
          imageDetail={imageDetail}
          workplaceName={workplaceName}
          workplaceLogo={workplaceLogo}
          devtools={devtools}
          teams={teams}
        />
      )}
    </>
  );
};

export default ProjectDetails;
