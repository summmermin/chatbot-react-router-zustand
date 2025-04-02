import { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    // 사이드바가 필요한 페이지 리스트
    const sidebarPages = ["/", "/chat", "/settings"];

    // 현재 페이지가 사이드바를 표시해야 하는 페이지인지 확인
    const showSidebar = sidebarPages.includes(location.pathname);

    return (
        <Box sx={{ display: "flex" }}>
            {showSidebar && (
                <>
                    <IconButton onClick={() => setOpen(true)} sx={{ position: "absolute", top: 16, left: 16 }}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                        <List sx={{ width: 250 }}>
                            <ListItem button component={Link} to="/" onClick={() => setOpen(false)}>
                                <ListItemText primary="홈" />
                            </ListItem>
                            <ListItem button component={Link} to="/chat" onClick={() => setOpen(false)}>
                                <ListItemText primary="챗봇" />
                            </ListItem>
                            <ListItem button component={Link} to="/test" onClick={() => setOpen(false)}>
                                <ListItemText primary="데이터 가져오기" />
                            </ListItem>
                        </List>
                    </Drawer>
                </>
            )}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
