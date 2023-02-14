import styled from 'styled-components'

export const Container = styled.div`
    width: 360px;
    height: 180px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    border: 1px solid rgb(230, 239, 252);

    margin-bottom: 50px;
`

export const Title = styled.h2`
    font-size: 28px;
    margin: 0 0 20px 0;

`

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;

    width: 100%;
    height: 230px;
    margin-bottom: 0;
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(230, 239, 252);
    background-color: rgb(112, 172, 255);

    width: 100%;
    color: rgb(230, 239, 252);
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`