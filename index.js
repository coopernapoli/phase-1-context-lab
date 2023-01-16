/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(inputArray) {
    return {
        firstName: inputArray[0],
        familyName: inputArray[1],
        title: inputArray[2],
        payPerHour: inputArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

function createEmployeeRecords(inputArray) {
    return inputArray.map(createEmployeeRecord);
}

function createTimeInEvent(datetime) {
    this.timeInEvents.push({
        type: 'TimeIn',
        date: datetime.substr(0, 10),
        hour: datetime.substr(11, 2),
    });
    return this;
}

function createTimeOutEvent(datetime) {
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: datetime.substr(0, 10),
        hour: datetime.substr(11, 2),
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    if (!timeIn || !timeOut) {
        return 0;
    }

    return (timeOut.hour - timeIn.hour);
}

function wagesEarnedOnDate(date) {
    return this.hoursWorkedOnDate(date) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(srcArray) {
    return srcArray.reduce((total, employee) => total + employee.allWagesFor(), 0);
}


