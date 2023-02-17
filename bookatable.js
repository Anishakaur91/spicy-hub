const form = document.getElementById("new-reservation-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstnameInput = event.target.firstname.value;
  const lastnameInput = event.target.lastname.value;
  const contactnumberInput = event.target.contactnumber.value;
  const emailaddressInput = event.target.emailaddress.value;

  console.log(firstnameInput);
  console.log(lastnameInput);
  console.log(contactnumberInput);
  console.log(emailaddressInput);

  const newBooking = {
    firstName: firstnameInput,
    lastName: lastnameInput,
    contactNumber: contactnumberInput,
    emailAddress: emailaddressInput,
  };
  const bookings = localStorage.getItem("bookings");
  if (bookings === null) {
    localStorage.setItem("bookings", JSON.stringify([newBooking]));
  } else {
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // turn bookings variable into a javascript object (because its a string when in localStorage)
    // add our new booking to the end of the array
    // put it back into a string and set it into localStorage
  }
  form.reset();
});
