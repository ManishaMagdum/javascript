var percentage = function(gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore>=70 || hscScore>=80||sscScore>90) ? `Congrates ${candidateName} you are eligible for TCS interview`:`Unfortunately you are not eligible`;
    console.log(`${result}`);
}
percentage(80,86,90,"Manisha Magdum");
percentage(70,65,55,"Avanti Patil");
percentage(60,79,88,"Rupali Patil");