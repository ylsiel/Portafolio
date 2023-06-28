let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #09a6a3;">Soy programadora</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
