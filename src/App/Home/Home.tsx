import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";

import type Lab from "types/Lab";
import labs from "labs";

import styles from "./Home.module.scss";

type HomeProps = Record<string, unknown>;

const Home: React.FC<HomeProps> = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [currentLab, setCurrentLab] = useState<Lab | null>(null);
    const handleOpen = (lab: Lab) => {
        setOpen(true);
        setCurrentLab(lab);
    };
    const handleClose = () => setOpen(false);

    return (
        <Box className={styles.background}>
            <Typography
                className={styles.title}
                variant="h3"
            >
                Home
            </Typography>
            <Box className={styles.container}>
                {labs.map((lab) => (
                    <Button
                        key={lab.name}
                        className={styles.menuButton}
                        variant="contained"
                        onClick={() => handleOpen(lab)}
                    >
                        {lab.icon}
                        {lab.name}
                    </Button>
                ))}
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Fade in={open}>
                    <Paper className={styles.modal}>
                        {currentLab?.tasks.map((task) => (
                            <Button
                                component={Link}
                                to={task.to}
                                key={task.name}
                                variant="contained"
                            >
                                {task.name}
                            </Button>
                        ))}
                    </Paper>
                </Fade>
            </Modal>
        </Box>
    );
};

export default Home;
