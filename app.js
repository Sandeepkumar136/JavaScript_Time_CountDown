const endDate = '19 September 2023 12:00 PM'
document.getElementById('date-for-refer').innerHTML = endDate;

const inputMods = document.querySelectorAll('input');

function myFunction() {
  const now = new Date();
  const end = new Date(endDate)
  const difference = (end - now) / 1000;  // Calculate difference in seconds
  console.log('Difference in seconds:', difference);


  if(difference<0)return;

  inputMods[0].value = Math.floor(difference / 3600 / 24);
  inputMods[1].value = Math.floor(difference/3600)%24;
  inputMods[2].value = Math.floor(difference/60)%60;
  inputMods[3].value = Math.floor(difference)%60;
};

myFunction();

setInterval(
    ()=>{
        myFunction()
    },1000
);