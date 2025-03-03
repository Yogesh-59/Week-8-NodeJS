const args=process.argv.slice(2);
const year=parseInt(args[0]);

function isLeapYear(year){
    if((year < 1000 || year > 9999)){
         return 'Please enter a valid year';
    } 
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
         return `${year} is a Leap Year.`;
    }
    else{
        return `${year} is Not Leap Year.`;
    }
}
console.log(isLeapYear(year));