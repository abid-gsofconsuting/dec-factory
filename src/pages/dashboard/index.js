import React from "react";
import BattleCard from "../../containers/cards/battlesCard";
import UserCard from "../../containers/cards/userCard";
export default function Dashboard() {
  return (
    <div className="container-fluid">
      <BattleCard
        title="Users Count"
        API_URL="https://splinterlands-data-service.herokuapp.com/users-count"
      />
      <UserCard
        title="Battles Count"
        API_URL="https://splinterlands-data-service.herokuapp.com/battles-count"
      />
    </div>
  );
}
