import {create} from "zustand";

const useChatStore = create((set) => ({
    messages: [],
    // messages 배열에 새로운 메시지를 추가하는 addMessage 함수
    // 유저 & 응답자 메시지 저장
    addMessage: (message) =>
        set((state) => ({messages: [...state.messages, message]})),
}));

export default useChatStore;
