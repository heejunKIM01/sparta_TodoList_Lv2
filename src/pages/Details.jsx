import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

function Details() {

    const todos = useSelector((state)=>{
        return state.todos.todos
    })

    const navigate = useNavigate()

    const params = useParams()

    const foundData = todos.find((item)=>{
        return item.id === parseInt(params.id)
    })

    console.log(todos)

    console.log(foundData)

    console.log(params)


    return (
        <StPage>
            <StContainer>
                <StBox>
                    <StHeader>
                        <div>ID : {foundData.id}</div>
                        <StBack_Button onClick={()=>{
                            navigate('/')
                        }}>이전으로</StBack_Button>
                    </StHeader>
                    <StTitle>{foundData.title}</StTitle>
                    <StComment>{foundData.comment}</StComment>
                </StBox>
            </StContainer>
        </StPage>
    )
}

export default Details



const StPage = styled.div`
    display: block;
`

const StContainer = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

const StBox = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const StHeader = styled.div`
    display: flex;
    height: 80px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 24px;
    -webkit-box-align: center;
    align-items: center;
`

const StBack_Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`

const StTitle = styled.div`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 0px 24px;
`

const StComment = styled.div`
    padding: 0px 24px;
    margin-bottom: 200px;
`
