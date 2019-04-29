// const url='https://api.darksky.net/forecast/55c3c627a3349222f189fa55e3e1608d/12.74409,77.8253?units=si'

// request({url:url,json:true},(error, response)=>{
// 	//const data =JSON.parse(response.body)
// 	//console.log(data)
// 	if (error) {
// 		console.log('unable to connect darksky/check ur internet connectivity')
// 	}
// 	else if (response.body.error) {
// 		console.log('unable to find location because-the latitude/longitude value might not there')
// 	}
// 	else{
// 	console.log(response.body.currently.temperature)
// 	console.log(response.body.currently.summary)
// 	console.log(response.body.daily.data[1].summary)
// }
// })
const request= require('request')
const forecast=(latitude,longitude,callback)=>{
	const url='https://api.darksky.net/forecast/55c3c627a3349222f189fa55e3e1608d/'+ encodeURIComponent(longitude)+','+ encodeURIComponent(latitude)+'?units=si'
	request({url,json:true},(error,{body})=>{
		if (error) {
			callback('no internet',undefined)
		}else if (body.currently.length === 0) {
			callback('wrong information',undefined)
		}else{ 
			callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
				body.currently.temperature + ' degress out. There is a ' + 
				body.currently.precipProbability + '% chance of rain.')
		}
	})
}
module.exports=forecast