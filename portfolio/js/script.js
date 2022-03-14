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

let sendButton=document.getElementById("send-button");
sendButton.addEventListener("click",(e)=>
{
	let subject=document.getElementById("message-subject")
	let body=document.getElementById("message-body")
	sendButton.href+=subject.value+"&body="+body.value;

	console.log(sendButton.href)
})
