import React from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';

const Header = ({onNavigate}) => {
    const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

    return (
        <AppBar position="fixed"
                sx={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    transition: '0.3s'
                }}
        >
            <Toolbar sx={{display: 'flex', justifyContent: 'center', gap: 2}}>
                {sections.map((section, index) => (
                    <Button key={index} color="inherit" onClick={() => onNavigate(index)}>
                        {section}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
