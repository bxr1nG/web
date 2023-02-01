import React from "react";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    return (
        <>
            <div>Hello World!</div>
            <div>{new Date().toLocaleDateString()}</div>
        </>
    );
};

export default Task;
