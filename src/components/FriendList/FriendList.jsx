import { Container, List } from "../FriendList/FriendList.styled";
import { FriendListItem } from "./FriendListItem";
import friends from "../../data/friends.json"

export const FriendList = () => {
    return (
        <Container>
            <List>
                <FriendListItem data={friends} />
            </List>
        </Container>
    )
}