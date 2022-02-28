window.addEventListener("load",()=>{
	let i=0;
	let target=document.querySelector('.home-page .content .information h2:nth-child(1)');
	text="Hi my name is Sonu"
	function typingAnimation()
	{
		if(i<text.length)
		{
			target.innerHTML +=text.charAt(i);
			i++;	
			setTimeout(typingAnimation,50);
		}
	}
	setTimeout(typingAnimation,200);

});
console.log("hello")