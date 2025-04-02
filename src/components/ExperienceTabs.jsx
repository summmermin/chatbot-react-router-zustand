import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

const ExperienceTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (_, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* 탭 메뉴 */}
            <Tabs value={tabIndex} onChange={handleChange} centered>
                <Tab label="경력 & 학력 & 기술" />
                <Tab label="추가 정보" />
            </Tabs>

            {/* 탭 내용 */}
            <Box sx={{ padding: 3 }}>
                {tabIndex === 0 && (
                    <Box>
                        <Typography variant="h5" fontWeight="bold">경력 사항</Typography>
                        <Typography>회사 A - 프론트엔드 개발자 (2022~현재)</Typography>
                        <Typography>회사 B - UI/UX 엔지니어 (2020~2022)</Typography>

                        <Typography variant="h5" fontWeight="bold" mt={2}>학력 사항</Typography>
                        <Typography>○○대학교 컴퓨터공학과 졸업</Typography>

                        <Typography variant="h5" fontWeight="bold" mt={2}>사용 기술</Typography>
                        <Typography>React, TypeScript, JavaScript, MUI</Typography>
                    </Box>
                )}

                {tabIndex === 1 && (
                    <Box>
                        <Typography variant="h5" fontWeight="bold">추가 정보</Typography>
                        <Typography>오픈소스 기여 경험</Typography>
                        <Typography>기술 블로그 운영</Typography>
                        <Typography>커뮤니티 활동 (React Korea)</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ExperienceTabs;
