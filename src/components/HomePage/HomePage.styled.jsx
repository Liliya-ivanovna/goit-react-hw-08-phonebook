import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

export const InviteBox = styled.p`
  margin-top: 120px;
  font-size: 3em;
  font-weight: 500;
  color: #0970e7;
  text-shadow: 3px 3px 3px rgba(168, 168, 168, 0.8);
`;

export const ContentBox = styled.div`
  position: relative;

  h2 {
    color: #fff;
    font-size: 5em;
    text-transform: uppercase;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  h2:nth-of-type(1) {
    color: transparent;
    -webkit-text-stroke: 2px #020a14;
  }

  h2:nth-of-type(2) {
    color:  #0970e7;
    
  }
  `