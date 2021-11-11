import { Timer } from "../Timers/timer";

export interface IntervalTimer {
    id: number;
    name: string;
    timers: Timer[];
    breakBetweenTimers: Timer;
    amountOfSets: number;
    breakBetweenSets: Timer;
    warmUpTimer?: Timer;
    coolDownTimer?: Timer;
}