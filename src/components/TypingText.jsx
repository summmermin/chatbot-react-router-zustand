import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const TypingText = () => {
    const text = '안녕하세요';
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 300); // 글자 나오는 속도 조절 (300ms)

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <Box sx={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            <Typography variant="h3">{displayText}</Typography>
        </Box>
    );
};

export default TypingText;
