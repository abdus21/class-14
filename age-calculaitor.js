
/**
 * Age calculator
 */

/**
 * make a function for queryselector
 * @param {*} value 
 * @returns queryselector
 */
function id(value){
    return document.querySelector(value);
}
//const age_cal_form = document.querySelector();
const result_age = document.querySelector('.result_age');

id('#age_cal_form').addEventListener('submit', function(e){
    e.preventDefault();
    
    let date2 = this.querySelector('input[type="date"]').value;
    let time2 = this.querySelector('input[type="time"]').value;

    let begin_age = new Date(date2 + ' ' + time2);
    let now_age = new Date();

    let age_deff = Math.floor(Math.abs(begin_age.getTime() - now_age.getTime()));

    let total_secound = Math.floor(age_deff/1000);
    let total_munite = Math.floor(total_secound/60);
    let total_hours = Math.floor(total_munite/60);
    let total_day = Math.floor(total_hours/24);
    let total_month = Math.floor(total_day/30);
    let total_years = Math.floor(total_month/12);

    //weeks
    let weeks = Math.floor(total_day/7);
    //week day
    //let weeks_day = weeks - (total_day*24);

    let month = total_month - (total_years * 12); 
    let day = total_day - (total_years * 365 * 30) - (total_month * 30);
    let hours = total_hours -  (total_years * 12 * 30 * 24) - (total_month * 30 * 24) - (total_day * 24);
    let munite = total_munite -  (total_years * 12 * 30 * 24 * 60) - (total_month * 30 * 24 * 60) - (total_day * 24 * 60) - (total_hours * 60);
    let secound = total_secound -  (total_years * 12 * 30 * 24 * 60 * 60) - (total_month * 30 * 24 * 60 * 60) - (total_day * 24 * 60 * 60) - (total_hours * 60 * 60) - (total_munite * 60);


    if(date2 == '' || time2 == ''){
        result_age.innerHTML = '<p class="alert alert-danger text-center">Date & Time required !</p>'
    }else{
        result_age.innerHTML = ` <h4 style="color: #003366;">Age Calculator</h4> <h4 style="background-color: #518428;padding: 5px;color: #fff;">Result</h4><h5>Age:</h5><p>${total_years} years ${month} months ${day} days</p><p>or ${total_month} months ${day} days</p><p>or ${weeks} weeks</p><p>or ${total_day} days</p><p>or ${total_hours} hours</p><p>or ${total_munite} minutes</p><p>or ${total_secound} seconds</p>`
    }


})

