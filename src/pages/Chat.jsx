import {useState} from "react";
import useChatStore from "../store/chatStore";
import {
    Container,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Paper,
    Select,
    MenuItem,
    FormControl, InputLabel, Typography, Box
} from "@mui/material";
import Carousel from "react-material-ui-carousel"; // 이미지 슬라이드용 라이브러리
import axios from 'axios';

const Chat = () => {
    const {messages, addMessage} = useChatStore();
    const [input, setInput] = useState("");
    const [data, setData] = useState(null); // 데이터 상태
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const [siteName, setSiteName] = useState("site_a");
    const [inType, setInType] = useState("query");
    const [userInput, setUserInput] = useState('영상 재생');

    const placeList = [
        {site: "site_a"},
        {site: "site_b"},
        {site: "site_c"},
    ];
    const inTypeList = [
        {site: "query"},
        {site: "param"},
    ];
    const handleSiteChange = (event) => {
        setSiteName(event.target.value);
    };
    const handleInTypeChange = (event) => {
        setInType(event.target.value);
    };

    const sendMessage = async () => {
        setLoading(true); // 로딩 시작
        setError(null); // 에러 초기화
        try {
            if (userInput.trim() === "") return; // 빈 값이면 리턴
            addMessage({text: '😊 User : ' + userInput, sender: "user"});


            // 데이터 요청 (예시로 JSONPlaceholder 사용)
            const response = await axios.post('http://localhost:5003/api/dialogflow', {
                siteName: site_id,
                inputType: in_type,
                inputString: in_str,
                params: {
                    userId: 'test',
                    deviceType: 'robot',
                    language: 'ko',
                    rawString: '',
                },
            });
            console.log(response, 'response');

            setData(response.data); // 데이터를 상태에 저장
            addMessage({
                text: '🤖 Bot : ' + JSON.stringify(response.data.response.result.speech[0]),
                sender: "bot",
                image_button: response.data.image_button
            });
            setUserInput(""); // todo 여기서 나중에 값 초기화해야해

        } catch (err) {
            addMessage({text: '🤖 Bot : ' + "데이터를 가져오는 데 실패했습니다.", sender: "bot"});
            setError("데이터를 가져오는 데 실패했습니다."); // 에러 처리
        } finally {
            setLoading(false); // 로딩 끝
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{padding: "20px", marginBottom: "20px"}}>

                <FormControl fullWidth style={{marginBottom: "20px"}}>
                    <InputLabel id="site-name-label">사이트 선택</InputLabel>
                    <Select
                        labelId="site-name-label"
                        value={siteName}
                        onChange={handleSiteChange}
                        label="사이트 선택"
                        style={{fontWeight: "bold", backgroundColor: "#f5f5f5"}}
                    >
                        {placeList.map((item, idx) => (
                            <MenuItem key={idx} value={item.site}>
                                {item.site}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* 두 번째 Select Box */}
                <FormControl fullWidth>
                    <InputLabel id="in-type-label">유형 선택</InputLabel>
                    <Select
                        labelId="in-type-label"
                        value={inType}
                        onChange={handleInTypeChange}
                        label="유형 선택"
                        style={{fontWeight: "bold", backgroundColor: "#f5f5f5"}}
                    >
                        {inTypeList.map((item, idx) => (
                            <MenuItem key={idx} value={item.site}>
                                {item.site}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Paper>
            <Paper elevation={3} style={{height: 400, overflowY: "auto", padding: 10}}>
                <List>
                    {messages.map((msg, index) => (

                        <ListItem
                            key={index}
                            style={{justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"}}
                        >
                            <Box
                                style={{
                                    backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#EAEAEA",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                    maxWidth: "70%",
                                }}
                            >
                                {/* 텍스트 메시지 */}
                                {msg.text && <ListItemText primary={msg.text}/>}

                                {msg.image_button?.length > 0 &&  (
                                    <Carousel autoPlay={false} navButtonsAlwaysVisible={true} strictIndexing={true} animation="slide">
                                        {msg.image_button.map((image, idx) => (
                                            <Box key={idx} component="img"
                                                 src={image.url}
                                                 alt={`image-${idx}`}
                                                 sx={{
                                                     width: "100%",
                                                     maxHeight: "200px",
                                                     objectFit: "contain",
                                                     borderRadius: "8px",
                                                     marginTop: "8px",
                                                     display:"block"
                                                 }}
                                            />
                                        ))}
                                    </Carousel>
                                )}

                                {/* 추가 설명 (description) */}
                                {msg.description && (
                                    <ListItemText
                                        primary={msg.description}
                                        style={{fontSize: "0.9rem", color: "#555"}}
                                    />
                                )}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <TextField
                fullWidth
                variant="outlined"
                placeholder="메시지를 입력하세요..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
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
