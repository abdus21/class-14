
const fiverr = document.querySelector('#fiverr');
const day = document.querySelector('#day');
const hours = document.querySelector('#hours');
const munite = document.querySelector('#munite');
const secound = document.querySelector('#secound');
const time_count_div = document.querySelector('.time_count_div');


fiverr.addEventListener('submit', function(e){
    e.preventDefault();
    let datee = this.querySelector('input[type="date"]').value;
    let timee = this.querySelector('input[type="time"]').value;

    if(datee == '' || timee == ''){
        time_count_div.innerHTML = '<p class="alert alert-danger">date & time are required !</p>';
    }else{
        setInterval(function(){

            let startDate = new Date();
            let endDate = new Date(datee + ' ' + timee);
        
            let time_deff = Math.abs(endDate.getTime() - startDate.getTime());
        
            let total_secound = Math.floor(time_deff/1000);
            let total_munite = Math.floor(total_secound/60);
            let total_hours = Math.floor(total_munite/60);
            let total_day = Math.floor(total_hours/24);

  
            let hours = total_hours - (total_day * 24);
            let munite = total_munite - (total_day * 24 * 60) - (hours * 60);
            let secound = total_secound - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (munite*60);
        
          time_count_div.innerHTML = `<span>day${total_day < 10 ? '0' + total_day : total_day}:</span> <span>hours${hours < 10 ? '0' + hours : hours}:</span> <span>minut${munite < 10 ? '0' + munite : munite}:</span> <span>secound${secound < 10 ? '0' + secound : secound}</span>`
                  
            },1000)
    }
    
})

