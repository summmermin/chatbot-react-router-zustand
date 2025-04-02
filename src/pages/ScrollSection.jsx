import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../layout/Header';
import EmailPopup from '../components/EmailPopup'
import TypingText from '../components/TypingText'

const Home = () => {
    const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    // 섹션으로 이동하는 함수
    const scrollToSection = (index) => {
        sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    };

    const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            {/* 헤더(외부 컴포넌트) */}
            <Header onNavigate={scrollToSection} />

            {/* 섹션 컨텐츠 */}
            <Box sx={{ marginTop: '64px' }}> {/* 헤더 높이만큼 여백 추가 */}
                {sections.map((section, index) => (
                    <Box
                        key={index}
                        ref={sectionRefs[index]}
                        sx={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#dcdcdc',
                        }}
                    >
                        {index === 0 ? <TypingText /> : <Typography variant="h4">{section}</Typography>}
                    </Box>
                ))}
            </Box>
            <EmailPopup />
        </Box>
    );
};

export default Home;
