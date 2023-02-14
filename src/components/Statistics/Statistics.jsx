import PropTypes from "prop-types";
import { Container, Title, List, Item} from "./Statistics.styled"

export const Statistics = ({data, title}) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            <List>
                {data.map(({ id, label, percentage }) => 
                        <Item key={id}>
                            <span>{label}</span>
                            <span>{percentage}</span>
                        </Item>
                    
                )  }
            </List> 
        </Container>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}