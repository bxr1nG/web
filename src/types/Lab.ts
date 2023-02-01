import type Task from "./Task";

type Lab = {
    name: string;
    icon: JSX.Element;
    tasks: Array<Task>;
};

export default Lab;
