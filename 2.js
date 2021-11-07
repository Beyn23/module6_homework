function func(num){
    if (num>=1000){
        return "Данные неверны";
    }
    else{
        if(num%num===0 && num%1==0 && num%2>0 && num%3>0 || num==2 || num==3){
            return "Число простое";
        }
        else{
            return "Число составное";
        }
    }
}
let num=+prompt("Ведите число не больше 1000");
alert(func(num));