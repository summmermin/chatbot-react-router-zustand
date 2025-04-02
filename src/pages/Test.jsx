import {useState} from "react";
import axios from "axios";
import {Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";

const Test = () => {
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
    const fetchData = async () => {
        setLoading(true); // 로딩 시작
        setError(null); // 에러 초기화

        try {
            if (userInput.trim() === "") return; // 빈 값이면 리턴


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
            });
            console.log(response, 'response');

            setData(response.data); // 데이터를 상태에 저장
            setUserInput("여행 영상"); // todo 여기서 나중에 값 초기화해야해

        } catch (err) {
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
                <Button variant="contained"
                        color="primary"
                        sx={{
                            marginTop: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                            },
                        }}
                        onClick={fetchData}>
                    데이터 가져오기
                </Button>
            </Paper>

            {loading && <Typography variant="h6">로딩 중...</Typography>}

            {error && <Typography color="error">{error}</Typography>}

            {data && (
                <Paper elevation={3} style={{ padding: "16px", whiteSpace: "pre-wrap", wordBreak: "break-word",overflowWrap: "break-word" }}>
                    {JSON.stringify(data.response, null, 2)}
                </Paper>
            )}
        </Container>
    );
};

export default Test;
