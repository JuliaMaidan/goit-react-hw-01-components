import PropTypes from "prop-types";
import { Container, Table, Thead, Tbody, Captions, Caption, Transactions, Transaction } from "../TransactionHistory/TransactionHistory.styled"

export const TransactionHistory = ({ data }) => {
    return (
        <Container>
            <Table>
            <Thead>
                <Captions>
                    <Caption>Type</Caption>
                    <Caption>Amount</Caption>
                    <Caption>Currency</Caption>
                </Captions>
            </Thead>
            <Tbody>
                {data.map(({ id, type, amount, currency }) => 
                <Transactions key={id}>
                    <Transaction>{type}</Transaction>
                    <Transaction>{amount}</Transaction>
                    <Transaction>{currency}</Transaction>
                </Transactions>
                )}
            </Tbody>       
        </Table>
        </Container>
    )
}

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}