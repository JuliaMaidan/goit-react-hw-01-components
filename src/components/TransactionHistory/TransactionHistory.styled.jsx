import styled from 'styled-components'

export const Container = styled.div`
    width: 360px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin: 0 auto;
`

export const Table = styled.table`
    width:100%;
	border:1px solid $color-form-highlight;
`

export const Thead = styled.thead`
    display: flex;
	width: 360px;
    height: 30px;
	background: black;
    color: white;
    align-items: center;
`
export const Captions = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
`
export const Caption = styled.td`
    width: 120px;
    text-align: center;
`

export const Tbody = styled.tbody`
    width: 100%;
`

export const Transactions = styled.tr`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
`

export const Transaction = styled.td`
    width: 120px;
    text-align: center;
`