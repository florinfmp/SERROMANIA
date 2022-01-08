// --------------------------------- for All pages------------------------------------
// Navbar: set the 'active' class on current page
var btns = document.querySelectorAll('.nav-link');

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
};

// --------------------------------- for Contact page------------------------------------
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