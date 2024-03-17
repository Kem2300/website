const calculateForm = document.getElementById('calculate-form'),
	  calculateCm = document.getElementById('calculate-cm'),
	  calculateKg = document.getElementById('calculate-kg'),
	  calculateMessage = document.getElementById('calculate-message')
	  
const calculateBMI = (e) => {
	e.preventDefault()
	
	// Check if the fields have a value
	if(calculateCm.value === '' || calculateKg === '') {
		// Add and remove color
		calculateMessage.classList.remove('color-green')
		calculateMessage.classList.add('color-red')
		
		// Show message
		calculateMessage.textContent = 'Fill in the Height & Weight'
		
		// Remove messages for 3 seconds
		setTimeout(() => {
			calculateMessage.textContent = ''
		}, 3000)
	} else {
		// BMI Formula
		const cm = calculateCm.value / 100,
			  kg = calculateKg.value,
			  bmi = Math.round(kg / (cm * cm))
		
		// Show your health status
		if(bmi < 18.5) {
			// Add color and display message
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Your MBI is ${bmi} and you are skinny`
		} else if(bmi < 25) {
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Your MBI is ${bmi} and you are healthy`
		} else {
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Your MBI is ${bmi} and you are overweight`
		}
		
		// To clear the fields
		calculateCm.value = ''
		calculateKg.value = ''
		
		// Remove message after 4 seconds
		setTimeout(() => {
			calculateMessage.textContent = ''
		}, 4000)
	}
}

calculateForm.addEventListener('submit', calculateBMI)