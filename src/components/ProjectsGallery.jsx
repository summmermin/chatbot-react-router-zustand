import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const projects = [
    { id: 1, title: '프로젝트 A', image: 'https://via.placeholder.com/500x300', description: 'A 프로젝트 설명' },
    { id: 2, title: '프로젝트 B', image: 'https://via.placeholder.com/500x300', description: 'B 프로젝트 설명' },
    { id: 3, title: '프로젝트 C', image: 'https://via.placeholder.com/500x300', description: 'C 프로젝트 설명' },
    { id: 4, title: '프로젝트 D', image: 'https://via.placeholder.com/500x300', description: 'D 프로젝트 설명' },
    { id: 5, title: '프로젝트 E', image: 'https://via.placeholder.com/500x300', description: 'E 프로젝트 설명' },
    { id: 6, title: '프로젝트 F', image: 'https://via.placeholder.com/500x300', description: 'F 프로젝트 설명' },
];

const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Box sx={{ width: '100%', maxWidth: '1100px', margin: 'auto', padding: 4 }}>
            {/* 갤러리 */}
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card
                            sx={{ cursor: 'pointer', boxShadow: 3, borderRadius: 2 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <CardMedia component="img" height="250" image={project.image} alt={project.title} />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* 선택된 프로젝트 상세 정보 */}
            {selectedProject && (
                <Box sx={{ marginTop: 4, padding: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="bold">{selectedProject.title}</Typography>
                    <Box component="img" src={selectedProject.image} alt={selectedProject.title} sx={{ width: '100%', maxWidth: 800, mt: 2, borderRadius: 2 }} />
                    <Typography variant="body1" sx={{ marginTop: 2 }}>{selectedProject.description}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default ProjectsGallery;
