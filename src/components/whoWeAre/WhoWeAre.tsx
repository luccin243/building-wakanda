import * as React from 'react';
import { Link } from 'react-router-dom';
import { onGetData } from '../../api';

interface IWhoWeAreProps {}

export const WhoWeAre: React.FC<IWhoWeAreProps> = (props) => {
  const [data, setData] = React.useState('');

  const onLoadData = async () => {
    const data = await onGetData('/whoweare/get/content');
    if (data && data.content) {
      setData(data.content);
    }
  };

  React.useEffect(() => {
    onLoadData();
  }, []);

  return (
    <div className='w-full bg-gray-50 relative z-10 '>
      <div className='container flex flex-col md:mx-auto  p-4 md:px-32 py-4 items-center md:flex-no-wrap'>
        {data ? (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        ) : (
          <div className='container flex flex-col'>
            <div className='w-8/12 my-6 h-6 rounded-3xl bg-gray-300 animate-pulse'></div>
            {Array(7)
              .fill(null)
              .map((x, y) => (
                <div
                  key={y}
                  className='w-full my-2 h-4 rounded-3xl bg-gray-300 animate-pulse'
                ></div>
              ))}

            <div className='w-8/12 my-6 h-6 rounded-3xl bg-gray-300 animate-pulse'></div>
            {Array(7)
              .fill(null)
              .map((x, y) => (
                <div
                  key={y}
                  className='w-full my-2 h-4 rounded-3xl bg-gray-300 animate-pulse'
                ></div>
              ))}
          </div>
        )}

        <div className='w-full flex items-center justify-center px-4 py-8'>
          <Link
            to='/contact-us'
            title='Join Us'
            className='w-32 text-white flex items-center justify-center bg-black p-4'
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};
