import styled from 'styled-components';

import innerHeight from 'ios-inner-height';

export const MobileContent = styled.div`
  min-width: 100vw;
  min-height: ${innerHeight()}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0);
  z-index: 0;
`;

export const DesktopContent = styled.div`
  min-width: 100vw;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0);
  z-index: 0;
`;
