import { TimeSpan } from "../TimeSpans/timeSpan";

export interface Timer {
    id: number;
    name: string;
    length: TimeSpan;
    color: string;
}
