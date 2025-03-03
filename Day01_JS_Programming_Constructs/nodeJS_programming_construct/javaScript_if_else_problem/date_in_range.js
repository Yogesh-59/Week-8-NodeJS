const args=process.argv.slice(2);
const date=parseInt[0];
const month=parseInt[1];

function isDateInRange(date,month){
    if((month==3 && date>=20 && date<=31) || (month==4 && date>=1 && date<=30) || (month==5 && date>=1 && date<=31) || (month==6 && date>=1 && date<=20)){
        return true;
    }
    else{
        return false;
    }
}
console.log(isDateInRange(date,month));
