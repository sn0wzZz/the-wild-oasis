import { styled } from 'styled-components'
import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ProtectedRoute({ children }) {
  const navigate= useNavigate()
  // Load the authenticated user
  const { isLoading, isAuthenticated } = useUser()
  
  // If there's NO authenticated user, redirect to the /login
  useEffect(()=>{
    if(!isAuthenticated && !isLoading) navigate('/login')

  },[navigate, isAuthenticated, isLoading])

  // Show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )


  // If there IS a user, render the app
  if(isAuthenticated)return children
}
