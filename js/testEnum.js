const DaysOfWeek = (function () {
    const days = {
        SUNDAY: "0",
        MONDAY: true,
        TUESDAY: 0.02,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6
    };
    return {
        get: function (name) {
            return days[name];
        }
    };
})();

// تغییر نمی کند
DaysOfWeek.SUNDAY = 7; 
console.log(DaysOfWeek.get('SUNDAY'));
