let contacts = [];

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("contacts");
  if (ref) {
    contacts = JSON.parse(ref);
    contacts.forEach(contact => renderContact(contact));
  }
});

const form = document.querySelector(".js-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addContact();
  form.reset();
});

function addContact() {
  const fileInput = document.getElementById("imgFile");
  let imageurl = document.getElementById("imgurl").value.trim();

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    imageurl = URL.createObjectURL(file);
  }

  const contactObject = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("myEmail").value,
    imageurl: imageurl,
    contactnumber: document.getElementById("myTel").value,
    id: Date.now(),
  };

  contacts.push(contactObject);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  renderAllContacts();
}

function renderAllContacts(filtered = contacts) {
  const list = document.querySelector(".Contact_list");
  list.innerHTML = "";
  filtered.forEach(contact => renderContact(contact));
}

function renderContact(contact) {
  if (contact.deleted) return;

  const list = document.querySelector(".Contact_list");

  const image =
    contact.imageurl.trim() !== ""
      ? contact.imageurl
      : "https://www.w3schools.com/howto/img_avatar.png";

  const node = document.createElement("article");
  node.setAttribute("class", "person");
  node.setAttribute("data-key", contact.id);
  node.innerHTML = `
    <img src="${image}" onerror="this.onerror=null;this.src='https://www.w3schools.com/howto/img_avatar.png';">
    <div class="contactdetail">
      <h1><i class="fas fa-user-circle contactIcon"></i> ${contact.name}</h1>
      <p><i class="fas fa-envelope contactIcon"></i> ${contact.email}</p>
      <p><i class="fas fa-phone-alt contactIcon"></i> ${contact.contactnumber}</p>
    </div>
    <button class="delete-contact js-delete-contact" title="Remover contato">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
      </svg>
    </button>
  `;

  list.appendChild(node);
}

document.querySelector(".Contact_list").addEventListener("click", (event) => {
  if (event.target.closest(".js-delete-contact")) {
    const itemKey = event.target.closest(".person").dataset.key;
    deleteContact(itemKey);
  }
});

function deleteContact(key) {
  const index = contacts.findIndex(contact => contact.id === Number(key));
  const UpdatedContactObject = {
    ...contacts[index],
    deleted: true,
  };
  contacts = contacts.filter(contact => contact.id !== Number(key));
  localStorage.setItem("contacts", JSON.stringify(contacts));
  renderAllContacts();
}

// Busca dinâmica
const searchInput = document.querySelector("#searchContact");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query)
    );
    renderAllContacts(filtered);
  });
}
