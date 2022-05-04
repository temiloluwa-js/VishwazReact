import React from "react";

const UserContext = React.createContext('Code Evolution')

const UserConsumer = UserContext.Consumer
const UserProvider = UserContext.Provider

export {UserConsumer, UserProvider}
export default UserContext