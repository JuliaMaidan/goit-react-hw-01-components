import PropTypes from "prop-types";
import { Item, Avatar, Username, Status} from "../FriendList/FriendList.styled"

export const FriendListItem = ({data}) => {
    return (
        <>
            {data.map(({ avatar, name, isOnline, id }) => 
                <Item key={id}>
                    <Status status={isOnline}></Status>
                    <Avatar src={avatar} alt="User avatar" width="48" />
                    <Username>{name}</Username>
                </Item>
                )
            }
        </>
    )
}

FriendListItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}