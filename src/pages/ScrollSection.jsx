import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../layout/Header';
import EmailPopup from '../components/EmailPopup';
import TypingText from '../components/TypingText';
import ExperienceTabs from '../components/ExperienceTabs';
import ProjectsGallery from '../components/ProjectsGallery';

const Home = () => {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Header onNavigate={(index) => sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' })} />

            {/* 첫 번째 섹션 */}
            <Box ref={sectionRefs[0]} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222', color: '#fff' }}>
                <TypingText />
            </Box>

            {/* 두 번째 섹션 */}
            <Box ref={sectionRefs[1]} sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, backgroundColor: '#f5f5f5', padding: 4 }}>
                <Box component="img" src="https://via.placeholder.com/300" alt="Profile" sx={{ width: 300, height: 300, borderRadius: '50%', boxShadow: 3 }} />
                <Box sx={{ width: '50%' }}>
                    <ExperienceTabs />
                </Box>
            </Box>

            {/* 세 번째 섹션 */}
            <Box ref={sectionRefs[2]} sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: 4 }}>
                <Typography variant="h4" fontWeight="bold" mb={3}>프로젝트 갤러리</Typography>
                <ProjectsGallery />
            </Box>

            <EmailPopup />
        </Box>
    );
};

export default Home;
