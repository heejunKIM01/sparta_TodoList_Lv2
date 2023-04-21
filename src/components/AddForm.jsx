import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { add_title } from '../redux/modules/todos'

function AddForm() {

    const todos = useSelector((state) => {
        return state.todos.todos
    })

    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const addButton = (event) => {
        event.preventDefault();

        if (title === '' || comment === '') {
            return;
        }

        const uniqueId = todos.length === 0 ? 1 : Math.max(...todos.map(item => item.id)) + 1;

        dispatch(
            add_title({
                id: uniqueId,
                title: title,
                comment : comment,
                isDone : false
            })
        )
        setTitle('')
        setComment('')
    }

    return (
        <StInput_Area>
            <StInput_group>
                <form onSubmit={addButton}>
                    <StLabel_title>제목</StLabel_title>
                    <StInput value={title} onChange={(event) => {
                        setTitle(event.target.value)
                    }}></StInput>
                    <StLabel_comment>내용</StLabel_comment>
                    <StInput value={comment} onChange={(event) => {
                        setComment(event.target.value)
                    }}></StInput>
                    <StAdd_button>추가하기</StAdd_button>
                </form>
            </StInput_group>
        </StInput_Area>
    )
}

export default AddForm


const StInput_Area = styled.div`
    padding: 30px;
    display: flex;
    background-color: #e9e9e9;
    border-radius: 10px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
`

const StInput_group = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
`

const StLabel_title = styled.label`
    font-weight: 700;
`

const StInput = styled.input`
    width: 240px;
    height: 40px;
    padding: 0 12px;
    border-radius: 12px;
    border: none;
    margin-left: 20px;
`

const StLabel_comment = styled.label`
    font-weight: 700;
    margin-left: 20px;
`

const StAdd_button = styled.button`
    background-color: #006b80;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    width: 140px;
    height: 40px;
    cursor: pointer;
    margin-left: 500px;
`

