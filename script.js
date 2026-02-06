let noCount = 0;

function showScreen(id) {

  let screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.style.display = "none";
  });

  let target = document.getElementById(id);

  if(target){
    target.style.display = "flex";
  }

  window.scrollTo(0,0);
}

function startSite(){

  stopAllSongs();   // add this line

  document.getElementById("start").style.display="none";
  document.getElementById("question").style.display="flex";

  document.getElementById("song1").play();

}

function yesClicked() {
  showScreen('celebrate');
}

function moveNo() {
  const noBtn = document.getElementById('noBtn');
  noCount++;
  if (noCount < 3) {
    noBtn.style.left = Math.random() * 200 + 'px';
    noBtn.style.top = Math.random() * 80 + 'px';
  } else {
    noBtn.innerText = "Think again 😜";
  }
}

function goOptions() {
  showScreen('options');
}

function openGallery() {
  showScreen('gallery');
}

function openSecret() {

  document.getElementById("song1").pause();

  let vid = document.getElementById("danceVideo");
  vid.currentTime = 0;
  vid.pause();

  showScreen("secret");
}

function openQuiz() {
  showScreen('quiz');
}

function correct() {
  document.getElementById('song2').play();
  showScreen('final');
} quizStep = 1;


function checkAnswer(correct) {

  const q = document.getElementById("quizQ");
  const msg = document.getElementById("quizMsg");

  if (!correct) {
    msg.innerText = "Try again sweetie 😘";
    return;
  }

  msg.innerText = "Good girl 💕✨";

  setTimeout(() => {

    quizStep++;

    if (quizStep === 2) {
      q.innerText = "Who is my safe place? 💞";
      msg.innerText = "";
      return;
    }

    if (quizStep === 3) {
      q.innerText = "What is us? ❤️";
      msg.innerText = "";
      return;
    }

    if (quizStep >= 4) {
      quizStep = 1;
      showScreen("finalBtn");
    }

  }, 1000);
}

function showFinal() {
  document.getElementById("song2").play();
  showScreen("final");
}

let quizStep = 1;

function checkAnswer(correct) {

let q = document.getElementById("quizQ");
let msg = document.getElementById("quizMsg");

if(!correct){
msg.innerText = "Try again sweetie 😘";
return;
}

msg.innerText = "Good girl 💕";

setTimeout(()=>{

quizStep++;

if(quizStep === 2){
q.innerText = "Who is my happiness? ❤️";
msg.innerText="";
return;
}

if(quizStep === 3){
q.innerText = "What are we? 💞";
msg.innerText="";
return;
}

if(quizStep === 4){
quizStep = 1;
showScreen("finalBtn");
}

},1000);
}

function goFinal(){

  // Hide all screens
  document.querySelectorAll(".screen").forEach(s=>{
    s.style.display = "none";
  });

  // Show final page
  document.getElementById("final").style.display = "block";
  startFireworks();


  // ⭐ FORCE STOP SONG 1
  let song1 = document.getElementById("song1");
  if(song1){
    song1.pause();
    song1.currentTime = 0;
    song1.src = song1.src;   // force stop trick
  }


  // ⭐ PLAY SONG 2
  let song2 = document.getElementById("song2");
  if(song2){
    song2.currentTime = 0;
    song2.play();
  }

}

  window.scrollTo(0,0);

function goFinal(){

  // Stop ALL songs first
  stopAllSongs();

  // Hide all screens
  document.querySelectorAll(".screen").forEach(s=>{
    s.style.display = "none";
  });

  // Show final screen
  document.getElementById("final").style.display = "block";

  // Play Song 2 only
  let song2 = document.getElementById("song2");
  if(song2){
    song2.play();
  }

}

function stopAllSongs(){

  let songs = document.querySelectorAll("audio");

  songs.forEach(song=>{
    song.pause();
    song.currentTime = 0;
  });

}

function openSecret(){

  stopAllSongs();

  showScreen("secret");

  let v = document.getElementById("dancevideo");

  if(v){
    v.pause();
    v.currentTime = 0;
  }

}

function createSparkles(){

  const container = document.querySelector(".sparkle-container");

  setInterval(()=>{

    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.animationDuration = (Math.random()*2+1)+"s";

    container.appendChild(sparkle);

    setTimeout(()=>{
      sparkle.remove();
    },3000);

  },300);

}

createSparkles();

function startFireworks(){

  const canvas = document.getElementById("fireworksCanvas");
  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function random(min,max){
    return Math.random()*(max-min)+min;
  }

  function firework(){

    let x = random(0,canvas.width);
    let y = random(0,canvas.height/2);

    for(let i=0;i<40;i++){

      let angle = Math.random()*2*Math.PI;
      let speed = random(2,5);

      let vx = Math.cos(angle)*speed;
      let vy = Math.sin(angle)*speed;

      let px = x;
      let py = y;

      function animate(){

        px += vx;
        py += vy;

        ctx.fillStyle = "pink";
        ctx.fillRect(px,py,3,3);

        requestAnimationFrame(animate);
      }

      animate();
    }
  }

  setInterval(firework,800);

}

function createSparkles(){

  const container = document.querySelector(".sparkle-container");

  if(!container) return;

  setInterval(()=>{

    const s = document.createElement("div");
    s.classList.add("sparkle");

    s.style.left = Math.random()*100 + "vw";
    s.style.animationDuration = (Math.random()*2+2)+"s";

    container.appendChild(s);

    setTimeout(()=>{
      s.remove();
    },3000);

  },300);

}

createSparkles();

function startFireworks(){

  const canvas = document.getElementById("fireworksCanvas");
  if(!canvas) return;

  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function random(min,max){
    return Math.random()*(max-min)+min;
  }

  function firework(){

    let x = random(0,canvas.width);
    let y = random(0,canvas.height/2);

    for(let i=0;i<30;i++){

      let angle = Math.random()*2*Math.PI;
      let speed = random(2,5);

      let vx = Math.cos(angle)*speed;
      let vy = Math.sin(angle)*speed;

      let px = x;
      let py = y;

      function animate(){

        px += vx;
        py += vy;

        ctx.fillStyle = "pink";
        ctx.fillRect(px,py,3,3);

        requestAnimationFrame(animate);
      }

      animate();
    }
  }

  setInterval(firework,800);
}