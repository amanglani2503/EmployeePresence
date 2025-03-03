const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Function to get work hours
function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Generating work type :- Absent, Part-Time, Full-Time
let empCheck = Math.floor(Math.random() * 3);
let empHours = getWorkHours(empCheck);
let dailyWage = empHours * WAGE_PER_HOUR;

console.log(`Employee worked ${empHours} hours, Daily Wage: $${dailyWage}`);
