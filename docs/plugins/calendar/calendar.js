"use strict";
class Calendar {
    constructor(divId) {
        this.firstDayOfWeek = 0;
        this.lastDayOfWeek = 6;
        // Days of week for the column headers
        this.DaysOfWeekSunStart = [
            'S', 'M', 'T', 'W', 'T', 'F', 'S'
        ];
        this.DaysOfWeekMonStart = [
            'M', 'T', 'W', 'T', 'F', 'S', 'S'
        ];
        // Month names
        this.Months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        // Cache div id
        this.divId = divId;
        // Set the current date
        const d = new Date();
        this.currMonth = d.getMonth();
        this.currYear = d.getFullYear();
        this.currDay = d.getDate();
        this.currDayName = d.toLocaleString('en-us', { weekday: 'long' });
    }
    nextMonth() {
        if (this.currMonth === 11) {
            this.currMonth = 0;
            this.currYear = this.currYear + 1;
        }
        else {
            this.currMonth = this.currMonth + 1;
        }
        this.displayCurrentMonth();
    }
    previousMonth() {
        if (this.currMonth === 0) {
            this.currMonth = 11;
            this.currYear = this.currYear - 1;
        }
        else {
            this.currMonth = this.currMonth - 1;
        }
        this.displayCurrentMonth();
    }
    displayCurrentMonth() {
        this.showMonth(this.currMonth, this.currYear);
    }
    /**
     * Change the starting week day based on the chosen radio button input.
     */
    changeStarterWeekDay(weekStartDay) {
        if (weekStartDay === 'Mon') {
            this.firstDayOfWeek = 1;
            this.lastDayOfWeek = 0;
        }
        else {
            this.firstDayOfWeek = 0;
            this.lastDayOfWeek = 6;
        }
        this.showMonth(this.currMonth, this.currYear);
    }
    showMonth(m, y) {
        // First day of the month week position, in the current displayed month
        const firstDayOfMonthWeekPosition = this.getFirstDayOfMonthWeekPosition(m, y);
        // Last day number of the current displayed month
        const lastDateOfMonth = new Date(y, m + 1, 0).getDate();
        // Last day number of the previous month, referred to the current displayed month
        const lastDayOfLastMonth = m === 0 ? 31 : new Date(y, m, 0).getDate();
        // HTML string that will be appended to the DOM
        let html = '';
        // Print the calendar header with month and year
        html += '<header class="current-date">';
        html += '<span class="current-month">' + this.Months[m] + ' ' + y + '</span>';
        html += '</header>';
        // Print the column head with the short names of the week days
        html += '<div class="week-days">';
        if (this.firstDayOfWeek === 1) {
            for (const dayName of this.DaysOfWeekMonStart) {
                html += '<div class="week-day">' + dayName + '</div>';
            }
        }
        else {
            for (const dayName of this.DaysOfWeekSunStart) {
                html += '<div class="week-day">' + dayName + '</div>';
            }
        }
        html += '</div>';
        // Open the weeks container
        html += '<div class="weeks">';
        // Print the day numbers
        for (let i = 1; i <= lastDateOfMonth; i++) {
            // Day of the week
            let dow = new Date(y, m, i).getDay();
            // If first day of the week, start new row
            if (dow === this.firstDayOfWeek) {
                html += '<div class="week">';
            }
            // If not first day of the week but first day of the month
            // it prints the last days from the previous month
            else if (i === 1) {
                html += '<div class="week">';
                let k = lastDayOfLastMonth - firstDayOfMonthWeekPosition + 1;
                for (let j = 0; j < firstDayOfMonthWeekPosition; j++) {
                    html += '<span class="day not-current-month">' + k + '</span>';
                    k++;
                }
            }
            const chk = new Date();
            const chkY = chk.getFullYear();
            const chkM = chk.getMonth();
            // Check and print the current day
            if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay) {
                html += '<span class="day today">' + i + '</span>';
            }
            else {
                html += '<span class="day">' + i + '</span>';
            }
            // If last day of the week, close the row
            if (dow === this.lastDayOfWeek) {
                html += '</div>';
            }
            // If not last day of the week, but last day of the month
            // it prints the next few days from the next month
            else if (i === lastDateOfMonth) {
                const lastDayOfMonthPosition = this.firstDayOfWeek === 1 ? 7 : 6;
                let k = 1;
                for (dow; dow < lastDayOfMonthPosition; dow++) {
                    html += '<span class="day not-current-month">' + k + '</span>';
                    k++;
                }
            }
        }
        // Close the weeks container
        html += '</div>';
        // Write HTML into the cached div
        document.getElementById(this.divId).innerHTML = html;
    }
    /**
     * Calculate the first day of the month week position, in the current displayed month.
     * Day position changes between different chosen week starting day (Sunday or Monday).
     */
    getFirstDayOfMonthWeekPosition(m, y) {
        // Case 1: "Monday" week starting day
        if (this.firstDayOfWeek === 1) {
            let weekPosition = new Date(y, m, 1).getDay() - 1;
            // If position is negative, reset week position to last week day position
            if (weekPosition === -1) {
                weekPosition = 6;
            }
            return weekPosition;
        }
        // Case 2: "Sunday" week starting day
        else {
            return new Date(y, m, 1).getDay();
        }
    }
}
// On Window Load
window.onload = () => {
    // Start calendar
    const cal = new Calendar('calendar');
    cal.displayCurrentMonth();
    // Bind next and previous buttons
    document.getElementById('next').onclick = () => {
        cal.nextMonth();
    };
    document.getElementById('prev').onclick = () => {
        cal.previousMonth();
    };
    // Attach event listner to the Change Week start day radio buttons
    const radios = document.getElementsByName('changeWeekStart');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            cal.changeStarterWeekDay(radio.value);
        });
    });
};