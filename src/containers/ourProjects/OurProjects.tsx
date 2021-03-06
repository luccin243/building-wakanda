import * as React from 'react';
import { Banner } from './../../components/banner';
import { Link } from 'react-router-dom';
import { onGetData } from './../../api/index';
import { API } from '../../config';

import { FaAngleRight } from 'react-icons/fa';

interface IOurProjectsProps {
  match: {
    url: string;
  };
}

export const OurProjects: React.FunctionComponent<IOurProjectsProps> = ({
  match,
}) => {
  const [projects, setProjects] = React.useState([]);
  const [limit, setLimit] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const loadData = async () => {
    setLoading(true);
    const data = await onGetData(`/get/all/project?limit=${limit}`);
    setProjects(data);
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Banner state={false} title='Our projects' />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container p-4 md:px-32 md:py-16 flex flex-wrap justify-center'>
          {projects.length > 0
            ? projects &&
              projects.map((x: any, y: number) => (
                <div className='w-full md:w-4/12 my-4 md:px-4' key={y}>
                  <Link to={`${match.url}/${x._id}`} key={y} className='w-full'>
                    <div className='shadow-2xl p-4 rounded-2xl'>
                      <>
                        <div className='bg-gray-900 w-full h-52 relative rounded-2xl'>
                          <img
                            key={y}
                            src={`${API}/${x.image}`}
                            alt='img'
                            className='object-cover h-full w-full hover:opacity-60 rounded-2xl'
                          />
                          <div className='absolute bottom-5 left-5'>
                            <span className='bg-yellow-400 px-4  py-2 rounded-md shadow-2xl'>
                              {x.status}
                            </span>
                          </div>
                        </div>
                      </>
                      <div className='flex  py-4 px-4'>
                        <h3 className='text-xl font-bold hover:text-yellow-400'>
                          {x.title}
                        </h3>
                      </div>
                      <div className='flex py-2 px-4'>
                        <button className='flex  p-2 items-center bg-gray-900 hover:bg-yellow-400 text-white'>
                          <span>Learn more</span>{' '}
                          <FaAngleRight className='mt-1' />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : Array(6)
                .fill(null)
                .map((x: null, y: number) => (
                  <div className='w-4/12 p-4' key={y}>
                    <div className='w-full h-80 py-16 animate-pulse bg-gray-200 rounded-2xl'></div>
                  </div>
                ))}
        </div>
        <div className='flex container w-full items-center justify-center p-10'>
          <button
            onClick={() => {
              setLimit(limit + 6);
            }}
            className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>
    </>
  );
};
