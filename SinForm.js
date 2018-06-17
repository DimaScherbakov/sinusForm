function SinForm(inputArr){
	var self = this;
	 	this.canvas,
		this.ctx,
		this.dataUrl,
		this.x = 0,
		this.y = 0,
	this.inputesCount = inputArr.length;
	
	function inRad(num) {
		return num * Math.PI / 180;
	}

	function constructor(inputArr){
		var layout = inputArr.map(function(value,index){
			return `<p class="sin-p" data-iterator=${index}><b>${value.name}</b><br>
   						<input type="text" size="20">
  					</p>`
		})
		layout = layout.join("")
		document.getElementById("sin-form").innerHTML = document.getElementById("sin-form").innerHTML + layout
		
		canvasCreate()
	};
	constructor(inputArr);

	function inputesCountGet (){
		console.log("this for getInputesCount(): "+this)
		return self.inputesCount
	}

	function canvasCreate (){
		self.canvas = document.getElementById("canvas");
		self.ctx = self.canvas.getContext("2d");
		self.canvas.width = document.getElementById("sin-form").offsetWidth;
		self.canvas.height = document.getElementById("sin-form").offsetHeight;
		self.ctx.translate(canvas.width/2,0);
		self.ctx.rotate(inRad(90));
		self.dataUrl = self.canvas.toDataURL();
		document.getElementById("sin-form").style.background = 'url('+self.dataUrl+')'
	}

	function sinRender(){
			self.y = Math.sin(self.x)
			self.ctx.fillRect(self.x*34,self.y*30,2,2)
			self.x= self.x+ 0.01
	}
	document.addEventListener("click",function(event){

		document.querySelectorAll(".sin-form input").forEach(function(value,index){
			value.classList.remove("grey-outline");
		})
		var closestInput = event.target.closest("p.sin-p input"); 
		if (!closestInput) return;
		inputIndex = +event.target.closest("p.sin-p").dataset.iterator;
		var timer = setInterval(function(){
			
			if(self.x>= Math.PI*((inputIndex+1)/2)){
				closestInput.classList.add("grey-outline");
				clearInterval(timer);return;}
			sinRender();
		},0.1)
	})
}