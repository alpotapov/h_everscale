import React from 'react';
// import { useParams, useHistory } from 'react-router';

import PageBase from '../PageBase/PageBase';

import PrimaryButton from '../../components/PrimaryButton';

import JoinIcon from './Join.svg';

const PoolPage = () => {
  // const { competitionId } = useParams();
  // const history = useHistory();

  const gameName = 'Змейка';

  return (
    <PageBase>
      <div className="container mx-auto">
        <div className="flex-grow my-8 mx-4">
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center mt-12 mb-6 mx-2">
            <p className="text-7xl uppercase font-extralight">{gameName}</p>
            <PrimaryButton
              onClick={() => {}}
              className="w-full md:btn-wide"
              icon={JoinIcon}
              variation="white"
            >
              <span className="text-cornflower-blue">Участвовать</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default PoolPage;
