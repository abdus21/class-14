

/**
 * Team members
 */

const devs_form = document.getElementById('devs_form');
const show_devs_innerhtml = document.querySelector('.show_devs_innerhtml')


devs_form.addEventListener('submit', function(e){
    e.preventDefault();
    let devs_name = this.querySelector('input[name="name"]').value;
    let devs_checkbox = this.querySelectorAll('input[name="skills"]:checked');
    let devs_radio = this.querySelector('input[type="radio"]:checked');
    let devs_photo = this.querySelector('input[name="photo"]').value;

    let devs_checkbox_value = [];
    for (let i = 0; i < devs_checkbox.length; i++) {
         devs_checkbox_value.push(devs_checkbox[i].value)  
    };

    let devs_arr;
    if(dataget('devs')){
        devs_arr = dataget('devs');
    }else{
        devs_arr = [];
    }

    devs_arr.push({
        devs_name     : devs_name,
        devs_checkbo : devs_checkbox_value,
        devs_radio    : devs_radio.value,
        devs_photo    : devs_photo
    })
    datasend('devs', devs_arr);
    //console.log(show_devs())
    show_devs()
    devs_name = '';
});

show_devs();

function show_devs(){
    let send_data = dataget('devs');


    let dataa = '';
    send_data.map(data =>{

        let list = '';
        data.devs_checkbo.map(d =>{
            list += '<li class="list-group-item">'+ d +'</li>'
        });

        dataa +=`<div class="col-md-4 my-3">
        <div class="card">
            <img style="width: 100%; height: 250px;object-fit: cover;" src="${data.devs_photo}" alt="">
            <div class="card-body">
                <h4>${data.devs_name}</h4>
                Gendar : ${data.devs_radio}<br>
                skills
                <hr>
                <div class="list-group">
                ${list}
                </div>
            </div>
        </div>
    </div>`
    })
    //show_devs_innerhtml
    show_devs_innerhtml.innerHTML = dataa;

}