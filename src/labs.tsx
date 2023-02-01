import React from "react";
import AirlineSeatFlatAngledIcon from "@mui/icons-material/AirlineSeatFlatAngled";

const icon = {
    width: "3rem",
    height: "3rem"
};

const labs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
    (item) => ({
        name: `Lab ${item}`,
        icon: <AirlineSeatFlatAngledIcon sx={icon} />,
        tasks: [1, 2, 3, 4, 5].map((task) => ({
            name: `Task ${task}`,
            to: `/lab${item}/task${task}`
        }))
    })
);

export default labs;
