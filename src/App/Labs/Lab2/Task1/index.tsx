import React from "react";

import styles from "./styles.module.scss";
import Clock from "./Clock";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    return (
        <div className={styles.container}>
            <Clock
                format="24"
                timezone="+3:00"
            />
            <Clock
                format="12"
                timezone="-5:00"
            />
        </div>
    );
};

export default Task;
