import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { complete_todo, delete_todo } from '../redux/modules/todos'

function TodoContainer() {

    const todos = useSelector((state) => {
        return state.todos.todos
    })

    const dispatch = useDispatch()

    const deleteButton = (id) => {
        const updateTodo = todos.filter((item)=>{
            return item.id !== id
        })

        // console.log(updateTodo)

        dispatch(delete_todo(updateTodo))
    }

    const completeButton = (id) => {
        const updateTodo = todos.map((item)=>{
            if(item.id === id){
                return{
                    ...item,
                    isDone : true
                }
            }else{
                return item
            }
        })
        dispatch(complete_todo(updateTodo))
    }

    return (
        <StList_container>
            <StWorking>Working.. 🔥</StWorking>
            <StContain>
                {
                    todos.filter((item) => {
                        return item.isDone === false
                    }).map((item) => {
                        return (
                            <StWorking_card key={item.id}>
                                <Link to={`/${item.id}`} style={{ textDecorationLine: 'none' }}>상세보기</Link>
                                <StWorking_card_title>{item.title}</StWorking_card_title>
                                <StWorking_card_comment>{item.comment}</StWorking_card_comment>
                                <StWorking_button>
                                    <StDelete_button onClick={() => deleteButton(item.id)}>삭제하기</StDelete_button>
                                    <StComplete_button onClick={() => completeButton(item.id)}>완료!</StComplete_button>
                                </StWorking_button>
                            </StWorking_card>
                        )
                    })
                }
            </StContain>
        </StList_container>
    )
}

export default TodoContainer


const StList_container = styled.div`
    padding: 0 24px;
    margin-top: 20px;
`

const StWorking = styled.div`
    font-weight: 700;
    font-size: 27px;
    padding: 10px;
`

const StContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap : 12px;
`

const StWorking_card = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`

const StWorking_card_title = styled.div`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`

const StWorking_card_comment = styled.div`
    font-size: 16px;
`

const StWorking_button = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`

const StDelete_button = styled.div`
    background-color: #fff;
    border: 2px solid red;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center; /* 가로 방향 가운데 정렬 */
    align-items: center; /* 세로 방향 가운데 정렬 */
`

const StComplete_button = styled.div`
    background-color: #fff;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
    display: flex;
    justify-content: center; /* 가로 방향 가운데 정렬 */
    align-items: center; /* 세로 방향 방향 가운데 정렬 */
`
