

/**
 * Team members
 */

const devs_form = document.getElementById('devs_form');
const show_devs_innerhtml = document.querySelector('.show_devs_innerhtml')

devs_form.addEventListener('submit', function(e){
    e.preventDefault();
    let dev_name = this.querySelector('input[name="name"]');
    let dev_skills = this.querySelectorAll('input[name="skills"]:checked');
    let dev_gander = this.querySelector('input[name="gander"]:checked');
    let dev_photo = this.querySelector('input[name="photo"]');

    let skills_arr = [];
    for (let i = 0; i < dev_skills.length; i++) {
        skills_arr.push( dev_skills[i].value);
        
    }

    let devs_arr;
    if(dataget('data_devs')){
        devs_arr = dataget('data_devs')
    }else{
        devs_arr = [];
    }

    devs_arr.push({
        dev_name   : dev_name.value,
        skills_arr   : skills_arr,
        dev_gander   : dev_gander.value,
        dev_photo   : dev_photo.value
    });

    datasend('data_devs', devs_arr)
    show_data()
})



show_data()
function show_data(){
    let all_data = dataget('data_devs')

    let resive = '';
    all_data.map(data =>{

        let list = '';
        data.skills_arr.map(d =>{
            list += '<li class="list-group-item">'+ d +'</li>'
        })
        resive += `
        <div class="col-md-4 my-3">
                <div class="card">
                    <img style="width: 100%; height: 250px;object-fit: cover;" src="${data.dev_photo}" alt="">
                    <div class="card-body">
                        <h4>${data.dev_name}</h4>
                        Gendar : ${data.dev_gander}<br>
                        skills
                        <hr>
                        <div class="list-group">
                        ${list}
                        </div>
                    </div>
                </div>
            </div> `
    })
    show_devs_innerhtml.innerHTML = resive;
}
