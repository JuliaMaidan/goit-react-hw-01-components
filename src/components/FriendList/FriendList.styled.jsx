import styled from 'styled-components'

export const Container = styled.div`
    width: 360px;
    // height: 180px;
    margin: 0 auto;

    margin-bottom: 50px;
`

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;

`

export const Item = styled.li`
    padding: 10px;
    border: 1px solid rgb(230, 239, 252);
    box-shadow: rgba(61, 63, 68, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    gap: 20px;
    align-items: center;

`

export const Avatar = styled.img`
    border: 10px solid rgb(230, 239, 252);
    border-radius: 50%;
    background-color: rgb(230, 239, 252);

`

export const Username = styled.p`
    font-size: 24px;
    font-weight: 700;
`

export const Status = styled.span`
    border-radius: 50%;
    margin-left: 10px;

    ${props => {
    if (props.status === true) {
        return 'border: 8px solid green;'
    }
      return 'border: 8px solid red;'
    }}
`