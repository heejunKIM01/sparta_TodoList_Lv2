import React from 'react'
import styled from 'styled-components'

function TitleArea() {
    return (
        <StMainTitle>
            <div>My Todo List</div>
            <div>React</div>
        </StMainTitle>
    )
}

export default TitleArea

const StMainTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border: solid 1px #e9e9e9;
    height: 50px;
    align-items: center;
    margin-top: 10px;
`

