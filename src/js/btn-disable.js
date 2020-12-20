// < !--Кнопка должна быть выключенной, пока не отмечен чекбокс-- >

const inputs = document.querySelectorAll("input[type=checkbox]")
const button = document.querySelector(".form-btn")

function check() {
	button.disabled = true
	inputs.forEach(input => {
		if (input.checked) button.disabled = false
	})
}

inputs.forEach(input => input.addEventListener("change", check))