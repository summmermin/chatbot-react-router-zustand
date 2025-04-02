import {useState} from "react";
import useChatStore from "../store/chatStore";
import {Container, TextField, Button, List, ListItem, ListItemText, Paper} from "@mui/material";

const Chat = () => {
    const {messages, addMessage} = useChatStore();
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;

        // 유저 메시지 추가
        addMessage({text: input, sender: "user"});

        // 응답자 메시지 추가
        // todo 추후 수정 필요
        setTimeout(() => {
            const botResponse = `🤖 Bot: ${input}에 대한 응답입니다.`;
            addMessage({text: botResponse, sender: "bot"});
        }, 1000);

        setInput(""); // 입력창 초기화
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{height: 650, overflowY: "auto", padding: 10}}>
                <List>
                    {messages.map((msg, index) => (
                        <ListItem key={index}
                                  style={{justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"}}>
                            <ListItemText
                                primary={msg.text}
                                style={{
                                    backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#EAEAEA",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <TextField
                fullWidth
                variant="outlined"
                placeholder="메시지를 입력하세요..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button variant="contained"
                    color="primary"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#1976d2',
                        },
                    }}
                    onClick={sendMessage} fullWidth>
                전송
            </Button>
        </Container>
    );
};

export default Chat;
