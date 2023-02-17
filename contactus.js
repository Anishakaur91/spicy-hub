const form = document.getElementById("new-contact-us-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = event.target.name.value;
  const emailaddressInput = event.target.emailaddress.value;
  const messageInput = event.target.message.value;

  console.log(nameInput);
  console.log(emailaddressInput);
  console.log(messageInput);

  const newContact = {
    name: nameInput,
    emailaddress: emailaddressInput,
    message: messageInput,
  };
  const contact = localStorage.getItem("contact");
  if (contact === null) {
    localStorage.setItem("contact", JSON.stringify([newContact]));
  } else {
    const contact = JSON.parse(localStorage.getItem("contact"));
    contact.push(newContact);
    localStorage.setItem("contact", JSON.stringify(contact));
  }

  form.reset();
});
