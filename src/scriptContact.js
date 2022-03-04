// import { displayMessage } from "./scriptShared";

const messageOnMessageSubmit = "Message was successfully sent";
const sendMessageButton = document.getElementById('sendMessageButton');
const contactForm = document.getElementById('contactForm');

// Displayed message for user
function displayMessage(text) {
	let messageDiv = document.getElementById('messageDiv');
	let containerMessage = document.createElement('div');
	containerMessage.classList.add('containerMessageStyle');
	let message = document.createElement('p');
	message.classList.add('messageStyle');
	message.innerText = text;
	containerMessage.appendChild(message);
	messageDiv.appendChild(containerMessage);
	setTimeout(() => messageDiv.removeChild(containerMessage), 3000);
};


// Definition of Bootstrap Validation function
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation');
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
			.forEach(function (form) {
					form.addEventListener('submit', function (event) {
							event.preventDefault();
							event.stopPropagation();
					}, false)
			})
})();

// Send message form
sendMessageButton.addEventListener('click', function(e){
  // Check validation for inputs of form
  var forms = document.querySelectorAll(".needs-validation");
  for (const form of forms) {
      if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
      }
  }
  contactForm.reset();
  contactForm.classList.remove('was-validated');
  // Display confirmation message
  displayMessage(messageOnMessageSubmit);
});