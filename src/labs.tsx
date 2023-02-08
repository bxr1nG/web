import React from "react";
import AnchorIcon from "@mui/icons-material/Anchor";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import TableViewIcon from "@mui/icons-material/TableView";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";

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
    },
    {
        name: "Lab 3",
        icon: <TableViewIcon sx={icon} />,
        tasks: [
            {
                name: "Task 1",
                to: "/lab3/task1"
            },
            {
                name: "Task 2",
                to: "/lab3/task2"
            }
        ]
    },
    {
        name: "Lab 4",
        icon: <CalendarMonthIcon sx={icon} />,
        tasks: [
            {
                name: "Task 1",
                to: "/lab4/task1"
            }
        ]
    },
    {
        name: "Lab 5",
        icon: <FormatAlignCenterIcon sx={icon} />,
        tasks: [
            {
                name: "Task 1",
                to: "/lab5/task1"
            }
        ]
    }
];

export default labs;
