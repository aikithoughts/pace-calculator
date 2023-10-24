const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mph = document.getElementById("mph");
const calculate = document.getElementById("calculate");

const calculateMPH = () => {
    const secondsAsDecimal = parseInt(seconds.value) / 60 || 0;
    const decimalTime = parseInt(minutes.value) + secondsAsDecimal || 0;
    const rawMPH = decimalTime > 0 ? 60 / decimalTime : 0;
    const formattedMPH = rawMPH.toFixed(2)
    mph.value = formattedMPH;
    
}

const calculateMinutesPerMile = () => {
    const rawMPH = 60 / parseInt(mph.value)|| 0;
    const fixedMPH = rawMPH.toFixed(2);
    const calculatedMinutes = Math.floor(fixedMPH);
    const calculatedSeconds = Math.round((fixedMPH - calculatedMinutes) * 60);
    minutes.value = calculatedMinutes;
    seconds.value = calculatedSeconds;
}

// calculate.addEventListener("click", calculateMPH);

minutes.addEventListener("input", calculateMPH);
seconds.addEventListener("input", calculateMPH);
mph.addEventListener("input", calculateMinutesPerMile);


