import React, { useEffect, useState } from "react";

export default function Timer() {
    const [worktime, setWorktime] = useState({ min: 25, seconds: 0 });
    const [resttime, setResttime] = useState({ min: 5, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkPhase, setIsWorkPhase] = useState(true); // Tracks if it's work or rest phase

    useEffect(() => {
        let timerId;

        if (isRunning) {
            timerId = setInterval(() => {
                if (isWorkPhase) {
                    updateTimer(setWorktime, () => {
                        setIsWorkPhase(false); // Switch to rest phase
                        setResttime((prevResttime) => ({
                            min: prevResttime.min, // Keep user-set rest time
                            seconds: 0,
                        })); // Reset rest timer to user-set values
                    });
                } else {
                    updateTimer(setResttime, () => {
                        setIsWorkPhase(true); // Switch back to work phase
                        setWorktime((prevWorktime) => ({
                            min: prevWorktime.min, // Keep user-set work time
                            seconds: 0,
                        })); // Reset work timer to user-set values
                    });
                }
            }, 100); // 1-second interval for the timer
        }

        return () => clearInterval(timerId); // Cleanup interval on pause or unmount
    }, [isRunning, isWorkPhase]);

    const updateTimer = (setTime, onPhaseEnd) => {
        setTime((prevTime) => {
            const { min, seconds } = prevTime;
            if (seconds === 0) {
                if (min > 0) {
                    return { min: min - 1, seconds: 59 };
                } else {
                    onPhaseEnd(); // Trigger phase change
                    return prevTime; // Keep the timer at 0 for cleanup
                }
            } else {
                return { min, seconds: seconds - 1 };
            }
        });
    };

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setWorktime({ min: worktime.min, seconds: 0 }); // Keep user-set work time
        setResttime({ min: resttime.min, seconds: 0 }); // Keep user-set rest time
        setIsWorkPhase(true); // Reset to work phase
    };

    const handleWorkTimeChange = (e) => {
        const value = Math.max(0, Number(e.target.value)); // Ensure non-negative
        setWorktime({ min: value, seconds: 0 });
    };

    const handleRestTimeChange = (e) => {
        const value = Math.max(0, Number(e.target.value)); // Ensure non-negative
        setResttime({ min: value, seconds: 0 });
    };

    const currentTimer = isWorkPhase ? worktime : resttime;
    const phaseLabel = isWorkPhase ? "Work Time" : "Rest Time";

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Pomodoro Timer</h1>
            <h2>{phaseLabel}</h2>
            <h2>
                {String(currentTimer.min).padStart(2, "0")}:
                {String(currentTimer.seconds).padStart(2, "0")}
            </h2>
            <div>
                <button onClick={handleStart} disabled={isRunning}>
                    Start
                </button>
                <button onClick={handlePause} disabled={!isRunning}>
                    Pause
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div style={{ marginTop: "20px" }}>
                <label>
                    Set Work Time (minutes):{" "}
                    <input
                        type="number"
                        value={worktime.min}
                        min={0}
                        onChange={handleWorkTimeChange}
                    />
                </label>
                <label style={{ marginLeft: "10px" }}>
                    Set Rest Time (minutes):{" "}
                    <input
                        type="number"
                        value={resttime.min}
                        min={0}
                        onChange={handleRestTimeChange}
                    />
                </label>
            </div>
        </div>
    );
}
