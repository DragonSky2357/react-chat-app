import { SET_CURRENT_CHAT_ROOM } from "../actions/types";

const initialChatRoomSate = {
  currentChatRoom: null,
};

export default function (state = initialChatRoomSate, action) {
  switch (action.type) {
    case SET_CURRENT_CHAT_ROOM:
      return {
        ...state,
        currentChatRoom: action.payload,
      };
    default:
      return state;
  }
}
