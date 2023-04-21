import React from 'react'
import TitleArea from '../components/TitleArea'
import AddForm from '../components/AddForm'
import TodoContainer from '../components/TodoContainer'
import NotDoneContainer from '../components/NotDoneContainer'
import styled from 'styled-components'


function Home() {
    return (
        <StAllContainer>
            <TitleArea />
            <AddForm />
            <TodoContainer />
            <NotDoneContainer />
        </StAllContainer>
    )
}

export default Home

const StAllContainer = styled.div`
  max-width: 1400px;
  min-width: 800px;
  margin: 0 auto;
`