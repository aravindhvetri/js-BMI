let form=document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let height= parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    let result=document.querySelector("#result");
    let bmi=(weight/((height*height)/10000));

    if((height==="")||(height<0)||(isNaN(height))){
        result.innerHTML="Please Enter your correct height";
        result.style.color="red";
        result.style.opacity="1";
    }
    else if((weight==="")||(weight<0)||(isNaN(weight))){
        result.innerHTML="Pleae Enter your correct weight";
        result.style.color="red";
        result.style.opacity="1";
    }
    else if(bmi > 0 && bmi <= 22){
        result.style.opacity="1";
        result.style.backgroundColor="Yellow";
        result.innerHTML=`<h2>${Math.round(bmi)} is UNDER WEIGHT</h2>`;
    }
    else if(bmi >= 23 && bmi <= 25){
        result.style.opacity="1";
        result.style.backgroundColor="green";
        result.innerHTML=`<h2>${Math.round(bmi)} is NORMAL WEIGHT</h2>`;
    }
    else{
        result.style.opacity="1";
        result.style.backgroundColor="red";
        result.innerHTML=`<h2>${Math.round(bmi)} is OVER WEIGHT</h2>`;
    }
})