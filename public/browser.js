console.log("FrontEnd js ishga tushdi.");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">
       ${item.reja}
    </span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
      >
        Ozgartirish
      </button>
      <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
        Ochirish
      </button>
    </div>
  </li>;`;
}
const createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.value.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytadan harakat qiling", err);
    });
});

document.addEventListener("click", (e) => {
  // delete oper
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Rostdan delete qilmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling", err);
        });
    }
  }
  // edit oper
  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }
});
