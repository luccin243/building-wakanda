import * as React from 'react';

interface IObjectifProps {}

export const Objectif: React.FC<IObjectifProps> = (props) => {
  return (
    <div className='w-full h-96 container flex flex-col md:mx-auto md:px-32 px-4 py-4 items-center md:flex-no-wrap p-12  bg-gray-50 relative z-10'>
      <h1 className='text-5xl p-4'>Objectif</h1>
      <p className='p-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        voluptas similique quaerat dolorem? Itaque ipsam repellat quibusdam
        possimus iure dolores! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequuntur voluptas similique quaerat dolorem?
        Itaque ipsam repellat quibusdam possimus iure dolores! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequuntur voluptas similique
        quaerat dolorem? Itaque ipsam repellat quibusdam possimus iure dolores!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        voluptas similique quaerat dolorem? Itaque ipsam repellat quibusdam
        possimus iure dolores!
      </p>
    </div>
  );
};
