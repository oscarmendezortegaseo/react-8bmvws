const Counter = (date) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const nowDate = new Date();
    const endDate = new Date(date);
    const distance = endDate - nowDate;
    const result = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    };

    if (distance > 0) {
        result.days = Math.floor(distance / day);
        result.hours = Math.floor((distance % day) / hour);
        result.minutes = Math.floor((distance % hour) / minute);
        result.seconds = Math.floor((distance % minute) / second)
    }
    return result;
};


export default Counter;