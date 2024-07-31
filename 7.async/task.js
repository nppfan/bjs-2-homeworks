class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('error text');
      }
      if (this.alarmCollection.some(item => item.id === id)) {
        console.error('Такой будильник уже существует');
        return;
      }
      this.alarmCollection.push({
        id,
        time,
        callback,
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
        });
      }
    }
    stop() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    resetAllCalls() {
      this.alarmCollection.forEach(item => item.canCall = true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
    