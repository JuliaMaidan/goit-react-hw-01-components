import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 300px;
    height: 400px;
    background-color: rgb(230, 239, 252);
    box-shadow: rgba(61, 63, 68, 0.15) 1.95px 1.95px 2.6px;
    margin: 0 auto;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 50px;

`

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const Name = styled.p`
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
`

export const Tag = styled.p`
    text-align: center;
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
    color: rgb(115, 123, 128);
`

export const Location = styled.p`
    text-align: center;
    font-size: 18px;
    margin: 0;
    color: rgb(115, 123, 128);
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    list-style-type: none;
    padding: 0;
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;

    font-size: 18px;
`