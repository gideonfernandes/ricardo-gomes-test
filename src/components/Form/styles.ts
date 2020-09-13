import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary);
  width: 460px;
  border-radius: 8px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > input {
    width: 100%;
    height: 46px;
    border-radius: 4px;
    margin: 8px 4px;
    padding: 8px;
    color: var(--gray-dark);
    background: var(--gray-light);
  }

  > button {
    width: 120px;
    height: 46px;
    margin: 24px 4px;
    border-radius: 4px;
    color: var(--secondary);
    background: var(--primary);
  }

  > span a {
    margin: 12px;
    color: var(--gray-dark);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
