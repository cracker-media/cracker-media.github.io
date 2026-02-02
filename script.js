	const scriptURL = 'https://script.google.com/macros/s/AKfycbwjD6Zy1N12ypJF47qdq0ZHTZZXcozeMpAPEXsTumlJyq6K7_WfqB1a10mQefKUDI9knA/exec'
	const form = document.forms['google-sheet']

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response =>  window.location.href = "index.html")
			.catch(error => console.error('Error!', error.message))
	})