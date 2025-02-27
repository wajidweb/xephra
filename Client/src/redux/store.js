import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import profileSlice from './features/profileSlice';
import eventsReducer from "./features/eventsSlice";
import userReducer from "./features/userSlice";
import rankingSlice from './features/rankingSlice';
import chatGroupsReducer from "./features/ChatsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileSlice,
    events: eventsReducer,
    user: userReducer,
    ranking: rankingSlice,
    chatGroups: chatGroupsReducer,
}
});

export default store;
