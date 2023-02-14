import { Profile } from "../Profile/Profile.jsx";
import { Statistics } from "../Statistics/Statistics"
import { FriendList } from "../FriendList/FriendList"
import { TransactionHistory } from "../TransactionHistory/TransactionHistory"
import user from "../../data/user.json"
import statistics from "../../data/data.json"
import friends from "../../data/friends.json"
import transactions from "../../data/transactions.json"
export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics data={statistics} title="Upload stats" />
      {/* <Statistics data={statistics}/> */}
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
};