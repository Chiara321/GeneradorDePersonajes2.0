// /pages/index.tsx
import React from 'react';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
import RightColumn from '../components/RightColumn';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

export default function Home() {
  return (
    <PageContainer>
      <LeftColumn>
        <Welcome />
      </LeftColumn>
      <RightColumn />
    </PageContainer>
  );
}
