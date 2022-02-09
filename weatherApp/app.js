

window.addEventListener("load",()=>{
	let longitude;
	let latitude
	let temperature=document.querySelector(".temperature");
	let region =document.querySelector(".region");
	let description=document.querySelector(".description");
	let icon=document.querySelector(".icon img");
	let degree=0;
	let celcues,faranheit;

	temperature.addEventListener("click",()=>
	{	
		if(degree===0)
		{
			temperature.textContent=celcues+"C";
			degree=1;
		}else
		{
			temperature.textContent=faranheit+"F";
			degree=0;
		}
	});
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(response=>{
			longitude=response.coords.longitude;
			latitude=response.coords.latitude;
			let api=`https://api.weatherapi.com/v1/current.json?key=7335a362930d45f681493106220902&q=${latitude},${longitude}`;
			fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data=>{
				console.log(data);
				temperature.textContent=data.current.temp_f+"F";
				description.textContent=data.current.condition.text;
				region.textContent=data.location.region;
				icon.src="https:"+data.current.condition.icon;
				celcues=data.current.temp_c;
				faranheit=data.current.temp_f;
			});
		})
		
	}
	else
	{
		console.log("not found")
	}

});

