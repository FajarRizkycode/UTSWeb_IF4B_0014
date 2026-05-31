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
counter("c1", 500);
counter("c2", 300);
counter("c3", 1000);

const team = [
  {name: "John Doe", role: "CEO"},
  {name: "Alice", role: "Finance"},
  {name: "Bob", role: "Developer"}
];

let container = document.getElementById("teamContainer");
team.forEach(t => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card fintech-card text-center p-3">
        <h5>${t.name}</h5>
        <p>${t.role}</p>
      </div>
    </div>
  `;
});

function filterGallery(category) {
  let items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
    if (category === "all") {
      item.classList.remove("hide");
    } else {
      if (item.classList.contains(category)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  });


}

