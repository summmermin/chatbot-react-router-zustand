import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Counter from "./Counter";

const Home = () => {
    return (
        <div>
            <h1>홈 페이지</h1>
            <Button variant="contained" startIcon={<HomeIcon />}>
                홈으로 가기
            </Button>
            <Counter/>
        </div>
    );
};

export default Home;
