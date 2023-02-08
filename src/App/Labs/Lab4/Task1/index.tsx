import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    const [value, setValue] = React.useState<never | null>(null);

    return (
        <Box
            sx={{
                padding: "2rem",
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </Box>
    );
};

export default Task;
