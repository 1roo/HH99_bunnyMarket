import React from 'react';
import CommunityList from './community/CommunityList';
import { CommunityWrapper } from './CommunityStyles';

import WritingButton from '../components/commons/Button';
const Community = () => {
  return (
    <>
      <CommunityWrapper>
        <CommunityList />
        <WritingButton isCommunity={true} />
      </CommunityWrapper>
    </>
  );
};

export default Community;