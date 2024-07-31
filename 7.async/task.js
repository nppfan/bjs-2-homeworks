class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            ;
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, 5);
    }
    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(item => {
                    if (item.time === this.getCurrentFormattedTime() && item.canCall) {
                        item.canCall = false;
                        item.callback();
                    }
                });
            }, 1000);
        }
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}