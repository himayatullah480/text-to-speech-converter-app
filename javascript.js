let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceselect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceselect.innerHTML = ""; 

    voices.forEach((voice, i) => {
        let option = new Option(voice.name + " (" + voice.lang + ")", i);
        voiceselect.add(option);
    });


    let femaleVoice = voices.find(v => v.name.toLowerCase().includes("female"));
    if(femaleVoice) speech.voice = femaleVoice;
    else speech.voice = voices[0]; 
}

window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;


    let selectedIndex = voiceselect.value;
    speech.voice = voices[selectedIndex];

    window.speechSynthesis.speak(speech);
});