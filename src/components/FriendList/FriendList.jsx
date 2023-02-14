import PropTypes from "prop-types";
import { Container, List, Item, Avatar, Username, Status} from "../FriendList/FriendList.styled"

export const FriendList = ({ data }) => {
    return (
        <Container>
            <List>
            {data.map(({ avatar, name, isOnline, id }) => 
                <Item key={id}>
                    <Status status={isOnline}></Status>
                    <Avatar src={avatar} alt="User avatar" width="48" />
                    <Username>{name}</Username>
                </Item>
                )
            }
            </List>
        </Container>
    )
}

FriendList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}