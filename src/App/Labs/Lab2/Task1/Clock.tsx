import React, { Component } from "react";

import styles from "./styles.module.scss";

type ClockProps = {
    format: string;
    timezone: string;
};
type ClockState = {
    time: string;
};

class Clock extends Component<ClockProps, ClockState> {
    private intervalID: ReturnType<typeof setInterval> | null = null;

    constructor(props: ClockProps) {
        super(props);
        //This declared the state of time at the very beginning
        const myOffset = new Date().getTimezoneOffset();
        const offset =
            parseInt(this.props.timezone.split(":")[0]) * 60 +
            parseInt(this.props.timezone.split(":")[1]);

        const time = new Date(
            new Date().getTime() + (myOffset + offset) * 60 * 1000
        ).toLocaleTimeString("en-US", { hour12: this.props.format === "12" });

        this.state = {
            time: time
        };
    }

    //This happens when the component mount and the setInterval function get called with a call back function updateClock()
    componentDidMount() {
        this.intervalID = setInterval(() => this.updateClock(), 1000);
    }

    //This section clears setInterval by calling intervalID to optimise memory
    componentWillUnmount() {
        clearInterval(this.intervalID as ReturnType<typeof setInterval>);
    }

    //This function set the state of the time to a new time
    updateClock() {
        const myOffset = new Date().getTimezoneOffset();
        const offset =
            parseInt(this.props.timezone.split(":")[0]) * 60 +
            parseInt(this.props.timezone.split(":")[1]);

        const time = new Date(
            new Date().getTime() + (myOffset + offset) * 60 * 1000
        ).toLocaleTimeString("en-US", { hour12: this.props.format === "12" });

        this.setState({
            time: time
        });
    }
    render() {
        return (
            <div className={styles.clock}>
                <p> {this.state.time}</p>
            </div>
        );
    }
}

export default Clock;
