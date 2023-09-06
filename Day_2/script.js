function calculatelove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();


    if (name1==="" || name2 ===""){
            alert("Please Enter Both Names")
    }
    else{
        const loverPercentage = Math.floor(Math.random()*101)
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love Percentage : ${loverPercentage}%`;
        
        if (loverPercentage<30){
            result.innerHTML += "<br> Not A Great Match Keep Looking"
        }
        else if (loverPercentage>=30 && loverPercentage<70){
            result.innerHTML += "<br> There Is A Potential. Give It A Try!";
        }
        else if (loverPercentage>=70 && loverPercentage<85){
            result.innerHTML += "<br> Great Match! Love Is In The Air";
        }
        else if (loverPercentage>=85 && loverPercentage<100){
            result.innerHTML += "<br> You Both Are Made For Each Other❤️⭐";
        }
        else{
            result.innerHTML += "<br> You're Born To Be Together❤️";
        }
    
    }
}