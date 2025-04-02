import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '20px',
                height: '20px',
                backgroundColor: 'rgba(80,135,236,0.8)',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
                transition: 'transform 0.1s ease-out',
                zIndex: 9999
            }}
        />
    );
};

export default CustomCursor;
