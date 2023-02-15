import PropTypes from "prop-types";
import {Wrapper, Avatar, Name, Tag, Location, List, Item} from "../Profile/Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <Wrapper>
            <div>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </div>
            <List>
                <Item>
                    <span>Views</span>
                    <span>{views}</span>
                </Item>
                <Item>
                    <span>Followers</span>
                    <span>{followers}</span>
                </Item>
                <Item>
                    <span>Likes</span>
                    <span>{likes}</span>
                </Item>
            </List>
        </Wrapper>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
    }))
}