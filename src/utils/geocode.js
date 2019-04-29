// console.log('starting')

// setTimeout(()=>{
// 	console.log('2 second timer')
// }, 2000)

// setTimeout(()=>{
// 	console.log('0 second timer')
// },0)

// console.log('stopping')

const request =require('request')



// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFyaXNoa3VtYXJrMDUiLCJhIjoiY2p1NnV0c25uMDFlODQ0cGhjamcyajdzNSJ9.1iRJIFT_5b1-n006yxfiGw&limit=1'

// request({url:geocodeURL,json:true},(error,response)=>{
// 	if (error) {
// 		console.log('unable to connect darksky/check ur internet connectivity')
// 	}
// 	else if (response.body.features.length ===0) {
// 		console.log('cant find location sever issue')
// 	}
// 	else{
// 	const longitude=response.body.features[0].center[0]
// 	const latitude=response.body.features[0].center[1]
// 	console.log('latitude is'+ latitude +'longitude is'+longitude)
// }
// })

const geocode=(address,callback)=>{
	const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGFyaXNoa3VtYXJrMDUiLCJhIjoiY2p1NnV0c25uMDFlODQ0cGhjamcyajdzNSJ9.1iRJIFT_5b1-n006yxfiGw&limit=1'
	request({url,json:true},(error,{body})=>{
           if (error) {
           	callback('no internet',undefined)
           }else if (body.features.length === 0) {
           	callback('location wrong',undefined)
           }else{
           	callback(undefined,{
           		latitude:body.features[0].center[0],
           		longitude:body.features[0].center[1],
           		location:body.features[0].place_name
           	})
           }
	})
}

module.exports=geocode