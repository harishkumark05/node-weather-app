console.log('client side js loaded')

// fetch('http://localhost:3000/weather?address=').then((response)=>{
// 	response.json().then((data)=>{
// 		if (data.error) {
// 			console.log(data.error)
// 		}else{
// 			console.log(data.location)
// 			console.log(data.forecast)
// 		}
// 	})
// })

const weatherForm= document.querySelector('form')
const search=document.querySelector('input')

const messageOne=document.querySelector('#message-1')
const messasgeTwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
	e.preventDefault()
	const location =search.value
	messageOne.textContent ='Loading...'
	messasgeTwo.textContent=''
	fetch('/weather?address='+ location).then((response)=>{
	response.json().then((data)=>{
		if (data.error) {
			messageOne.textContent=data.error
		}else{
			messageOne.textContent=data.location
			messasgeTwo.textContent=data.forecast
		}
	})
})
})