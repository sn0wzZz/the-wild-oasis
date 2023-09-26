import styled from 'styled-components'
import Logout from '../features/authentication/Logout'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../features/authentication/UserAvatar'

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-lg);
  /* border-radius: 0 0 3rem 3rem; */

  display: flex;
  gap:2.4rem;
  align-items: center;
  justify-content:  flex-end;
`

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar/>
      <HeaderMenu />
    </StyledHeader>
  )
}
