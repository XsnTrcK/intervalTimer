## Interval timer application
### Data Needed:
---
```
ListOfIntervalTimers: intervalTimer[]
intervalTimer: 
{
    id: int,
    name: string,
    timers: timer[],
    amountOfSets: int,
    breakBetweenSets: timer,
    breakBetweeenTimers: timer,
    warmupTimer: timer,
    coolDownTimer: timer,
}
timer: {
    id: int,
    name: string,
    length: int,
    color: string,
}

completedIntervals: completedInterval[]
completedInterval: {
    idOfInterval: int,
    nameOfInterval: string,
    dateCompleted: datetime,
    expectedIntervalActive: int,
    actualIntervalActive: int
}
```

### Views Needed
---
1. View to add/edit timer
2. View to add/edit interval
3. View to see all intervals
4. View to run an interval
5. View to show completed intervals

### Logic Needed
---
1. `interval/added`
2. `interval/deleted`
3. `interval/updated`
4. `completedInterval/added`
5. `completedInterval/deleted`