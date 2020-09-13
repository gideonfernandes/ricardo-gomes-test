import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-dark);
  padding: 20px;

  > p {
    color: var(--secondary);
    font-size: 14px;
    font-weight: 300;
  }
`;
