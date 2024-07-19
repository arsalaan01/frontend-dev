var profileInfo = [
  {
    name: "Julie",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Stranger",
  },
  {
    name: "Donna",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Stranger",
  },
  {
    name: "Mandy",
    url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Stranger",
  },
];

const container = document.querySelector(".container");

function print() {
  var clutter = "";

  profileInfo.forEach(function (val, index) {
    clutter += `<div class="card">
        <div class="card-header">
          <img
            src=${val.url}
            alt=""
          />
        </div>
        <div class="card-body">
          <h3>${val.name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quo?
          </p>
          <span class=${val.status}>${val.status}</span>
        </div>
        <button class=${
          val.status === "Stranger" ? "add" : "remove"
        } id=${index}>${
      val.status === "Friend" ? "Remove" : "Add Friend"
    }</button>
      </div>`;
  });

  container.innerHTML = clutter;
}

print();

document
  .querySelector(".container")
  .addEventListener("click", function (details) {
    profileInfo[details.target.id].status = "Friend";
    print();
  });
