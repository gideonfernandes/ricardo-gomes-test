import styled from 'styled-components';
import { Fa500Px, FaLock } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--gray-dark);
`;

export const AppLogo = styled(Fa500Px)`
  fill: var(--gray-light);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const Menu = styled.div`
  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > li {
      color: var(--secondary);
      margin: 0 10px;

      > a {
        color: var(--secondary);
        text-decoration: none;

        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const LogoutIcon = styled(FaLock)`
  fill: var(--gray-light);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
`;
