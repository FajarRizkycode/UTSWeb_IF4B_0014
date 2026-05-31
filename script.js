//Dark Mode
function toggledark(){
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
}

function counter(id, max) {
  let i = 0;
  let interval = setInterval(() => {
    document.getElementById(id).innerText = i;
    i += 10;
    if (i >= max) clearInterval(interval);
  }, 30);
}