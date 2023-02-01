import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    const [link, setLink] = useState<string | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setLink(event.target.value as string);
    };

    useEffect(() => {
        if (link) {
            window.open(link, "_blank");
        }
    }, [link]);

    return (
        <Box sx={{ margin: 5 }}>
            <FormControl fullWidth>
                <InputLabel>Menu</InputLabel>
                <Select
                    value={link || ""}
                    label="Menu"
                    onChange={handleChange}
                >
                    <MenuItem value={""}></MenuItem>
                    <MenuItem value={"https://www.itransition.com/"}>
                        Programmer
                    </MenuItem>
                    <MenuItem value={"https://www.figma.com/"}>
                        Designer
                    </MenuItem>
                    <MenuItem value={"https://chitatel.by/"}>Teacher</MenuItem>
                    <MenuItem
                        value={
                            "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B1%D0%BE%D0%B9%D1%89%D0%B8%D0%BA%D0%B8_(%D1%82%D0%B5%D0%BB%D0%B5%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB)"
                        }
                    >
                        Driver
                    </MenuItem>
                    <MenuItem
                        value={
                            "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80"
                        }
                    >
                        Sysadmin
                    </MenuItem>
                    <MenuItem
                        value={
                            "https://www.babla.ru/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/engineer"
                        }
                    >
                        Engineer
                    </MenuItem>
                    <MenuItem value={"https://www.belstu.by/"}>
                        Student
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default Task;
