import styled from 'styled-components'
import Uploader from '../data/Uploader'

import MainNav from './MainNav'
import Logo from './Logo'

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
   gap: 3.2rem;
   box-shadow: var(--shadow-lg);
   /* border-radius: 0 3rem 3rem 0; */
   z-index: 99;
`

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  )
}
