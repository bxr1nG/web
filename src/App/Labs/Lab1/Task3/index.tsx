import React from "react";

import styles from "./styles.module.scss";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    const table = [
        ["", "a", "b", "c", "d", "e", "f", "g", "h", ""],
        ["1", "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜", "1"],
        ["2", "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟", "2"],
        ["3", "", "", "", "", "", "", "", "", "3"],
        ["4", "", "", "", "", "", "", "", "", "4"],
        ["5", "", "", "", "", "", "", "", "", "5"],
        ["6", "", "", "", "", "", "", "", "", "6"],
        ["7", "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙", "7"],
        ["8", "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖", "8"],
        ["", "a", "b", "c", "d", "e", "f", "g", "h", ""]
    ];

    return (
        <div className={styles.table}>
            {table.map((row, i) =>
                row.map((cell, j) => (
                    <div
                        className={
                            i === 0 || i === 9 || j === 0 || j === 9
                                ? styles.corner
                                : (i + j) % 2 === 0
                                ? styles.dark
                                : styles.light
                        }
                        key={`${i}-${j}`}
                    >
                        {cell}
                    </div>
                ))
            )}
        </div>
    );
};

export default Task;
