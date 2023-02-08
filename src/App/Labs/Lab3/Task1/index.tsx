import React, { useState } from "react";
import { MuiTelInput, MuiTelInputCountry } from "mui-tel-input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { data } from "./constants";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    const [value, setValue] = useState<string>(data[0].code);
    const [arr, setArr] = useState<Array<string>>(data[0].operators);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        setArr(data.find((x) => newValue.includes(x.code))?.operators || []);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "5rem"
            }}
        >
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "500px",
                    padding: "2rem",
                    gap: "2rem"
                }}
            >
                <MuiTelInput
                    value={value}
                    onChange={handleChange}
                    variant="standard"
                    onlyCountries={
                        data.map((x) => x.name) as Array<MuiTelInputCountry>
                    }
                />
                {arr && (
                    <FormControl>
                        <FormLabel>Operators</FormLabel>
                        <RadioGroup defaultValue="none">
                            <FormControlLabel
                                value={"none"}
                                control={<Radio />}
                                label={"None"}
                            />
                            {arr.map((x) => (
                                <FormControlLabel
                                    key={x}
                                    value={x}
                                    control={<Radio />}
                                    label={x}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                )}
            </Paper>
        </Box>
    );
};

export default Task;
