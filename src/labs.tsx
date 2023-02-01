import React from "react";
import AnchorIcon from "@mui/icons-material/Anchor";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";

const icon = {
    width: "3rem",
    height: "3rem"
};

const labs = [
    {
        name: "Lab 1",
        icon: <AnchorIcon sx={icon} />,
        tasks: [
            {
                name: "Task 1",
                to: "/lab1/task1"
            },
            {
                name: "Task 2",
                to: "/lab1/task2"
            },
            {
                name: "Task 3",
                to: "/lab1/task3"
            }
        ]
    },
    {
        name: "Lab 2",
        icon: <SettingsInputCompositeIcon sx={icon} />,
        tasks: [
            {
                name: "Task 1",
                to: "/lab2/task1"
            },
            {
                name: "Task 2",
                to: "/lab2/task2"
            }
        ]
    }
];

export default labs;
