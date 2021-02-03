var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous=true;

var flag="";

function start_record(){
    recognition.start();
    var toChange="";
    if(flag=='title'){
        toChange=document.getElementById('basic-title');
    }
    else if(flag=='txt'){
        toChange=document.getElementById('txtarea');
    }
   
    recognition.onresult=function(event){
        var speechResult = event.results[event.resultIndex][0].transcript.toLowerCase();
        var prev=toChange.value;
        var curr=prev+" "+speechResult;
        toChange.value=curr;
    }
}

function stop_record(){
    recognition.stop();
    
}
function start_title(){
    flag="title";
    var start_mic=document.getElementById('start_title_mic');
    var stop_mic=document.getElementById('stop_title_mic');
    start_mic.hidden=true;
    stop_mic.hidden=false;
    start_record();
    
}

function stop_title(){
    flag="title";
    var start_mic=document.getElementById('start_title_mic');
    var stop_mic=document.getElementById('stop_title_mic');
    start_mic.hidden=false;
    stop_mic.hidden=true;
    stop_record();
}

function start_txt(){
    flag="txt";
    var start_mic=document.getElementById('start_txt_mic');
    var stop_mic=document.getElementById('stop_txt_mic');
    start_mic.hidden=true;
    stop_mic.hidden=false;
    
    start_record();
}

function stop_txt(){
    flag="txt";
    var start_mic=document.getElementById('start_txt_mic');
    var stop_mic=document.getElementById('stop_txt_mic');
    start_mic.hidden=false;
    stop_mic.hidden=true;

    stop_record();
}
