window.snake.fishesHUD = function(settings = {}) {
  if(settings.background === undefined)
    settings.background = 'black';
	if(settings.showInputDisplay === undefined)
		settings.showInputDisplay = true;
	if(settings.arrows === undefined)
		settings.arrows = false;
	if(settings.darkModeGang === undefined)
		settings.darkModeGang = true;
	if(settings.burgerGang === undefined)
		settings.burgerGang = true;
	if(settings.showLilSebastianImages === undefined)
		settings.showLilSebastianImages = true;

  if(settings.showInputDisplay) {
    const buttonSize = 50;
    let buttons = {
      up:    { x: 20 + buttonSize,     y: 10,              pressed: false, character: settings.arrows ? '↑' : 'W', }, 
      left:  { x: 10,                  y: 20 + buttonSize, pressed: false, character: settings.arrows ? '←' : 'A', },
      down:  { x: 20 + buttonSize,     y: 20 + buttonSize, pressed: false, character: settings.arrows ? '↓' : 'S', },
      right: { x: 30 + 2 * buttonSize, y: 20 + buttonSize, pressed: false, character: settings.arrows ? '→' : 'D', },
    };
    document.body.addEventListener('keydown', evt => {
      if(evt.keyCode === 87 || evt.keyCode === 38)
        buttons.up.pressed = true;
      if(evt.keyCode === 65 || evt.keyCode === 37)
        buttons.left.pressed = true;
      if(evt.keyCode === 83 || evt.keyCode === 40)
        buttons.down.pressed = true;
      if(evt.keyCode === 68 || evt.keyCode === 39)
        buttons.right.pressed = true;
    });
    document.body.addEventListener('keyup', evt => {
      if(evt.keyCode === 87 || evt.keyCode === 38)
        buttons.up.pressed = false;
      if(evt.keyCode === 65 || evt.keyCode === 37)
        buttons.left.pressed = false;
      if(evt.keyCode === 83 || evt.keyCode === 40)
        buttons.down.pressed = false;
      if(evt.keyCode === 68 || evt.keyCode === 39)
        buttons.right.pressed = false;
    });

		const canv = document.createElement('canvas');
		canv.width = '200';
		canv.height = '150';
		canv.style.position = 'fixed';
		canv.style.left = '600px';
		canv.style.bottom = '0px';
		document.body.appendChild(canv);

		const ctx = canv.getContext('2d');

		setInterval(_ => {
			ctx.fillStyle = settings.background;
			ctx.fillRect(0, 0, canv.width, canv.height);
			
			for(let button of Object.values(buttons)) {
				ctx.fillStyle = button.pressed ? '#ffffff55' : '#99999955';
				ctx.strokeStyle = 'black';
				ctx.lineWidth = 4;
				
				ctx.fillRect(button.x, button.y, buttonSize, buttonSize);
				ctx.strokeRect(button.x, button.y, buttonSize, buttonSize);
				
				let c = button.character;
				ctx.fillStyle = 'black';
				let fontSize = 32;
				ctx.textAlign = 'center';
				ctx.font = `${fontSize}px consolas`;
				ctx.fillText(c, button.x + buttonSize / 2, button.y + buttonSize / 2 + fontSize / 3);
			}
		}, 1000 / 60);
	}

	if(settings.darkModeGang) {
		const darkImg = document.createElement('img');
		darkImg.src = 'https://i.postimg.cc/Pq4cFZnR/818477021390045215.png';
		darkImg.width = 100;
		darkImg.height = 100;
		darkImg.style.position = 'fixed';
		darkImg.style.right = '0px';
		darkImg.style.bottom = '0px';
		document.body.appendChild(darkImg);
	}

	if(settings.burgerGang) {
		const burgerImg = document.createElement('img');
		burgerImg.src = 'https://i.postimg.cc/G2kpNdj2/818584036782899231.png';
		burgerImg.width = 100;
		burgerImg.height = 100;
		burgerImg.style.position = 'fixed';
		burgerImg.style.right = `${settings.darkModeGang ? 100 : 0}px`;
		burgerImg.style.bottom = '0px';
		document.body.appendChild(burgerImg);
	}

	if(settings.showLilSebastianImages) {
		const horseImg = document.createElement('img');
		horseImg.src = 'https://assets-auto.rbl.ms/531b67415e6c7c2f26ab211bb24a2c87c04d4583019e79ec177f336de9b2aa4c';
		horseImg.width = 200;
		horseImg.height = horseImg.width
		horseImg.style.position = 'fixed';
		horseImg.style.right = '0px';
		horseImg.style.top = '0px';
		document.body.appendChild(horseImg);

		const horseImg1 = document.createElement('img');
		horseImg1.src = 'http://esq.h-cdn.co/assets/15/08/1024x512/landscape_1424204090-tumblr_m4g0ddotsx1qa1w9bo1_1280.jpg';
		horseImg1.width = 200;
		horseImg1.height = horseImg1.width / 2;
		horseImg1.style.position = 'fixed';
		horseImg1.style.right = `${horseImg.width}px`;
		horseImg1.style.top = '0px';
		document.body.appendChild(horseImg1);
	}
};


window.snake.burger = function() {

};


/* ----------------------------------------------------------------- */


window.snake.darkMode = function() {
	eval(`
		var s_N_c = function(a) {
			if(a.Ca == '00')
				a.wa.src = 'https://i.postimg.cc/w7f6jyZx/burger-00.png';
			if(a.Ca == '01')
				a.wa.src = 'https://i.postimg.cc/t7DbBnXd/burger-01.png';
			if(a.Ca == '02')
				a.wa.src = 'https://i.postimg.cc/cgSWbQgh/burger-02.png';
			if(a.Ca == '03')
				a.wa.src = 'https://i.postimg.cc/DSS7Jf3r/burger-03.png';
			if(a.Ca == '04')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '05')
				a.wa.src = 'https://i.postimg.cc/yJ9BjfdW/burger-05.png';
			if(a.Ca == '06')
				a.wa.src = 'https://i.postimg.cc/QKN3XhqW/burger-06.png';
			if(a.Ca == '07')
				a.wa.src = 'https://i.postimg.cc/yJ9BjfdW/burger-05.png';
			if(a.Ca == '08')
				a.wa.src = 'https://i.postimg.cc/yJ9BjfdW/burger-05.png';
			if(a.Ca == '09')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '10')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '11')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '12')
				a.wa.src = 'https://i.postimg.cc/DSS7Jf3r/burger-03.png';
			if(a.Ca == '13')
				a.wa.src = 'https://i.postimg.cc/w7f6jyZx/burger-00.png';
			s_Ig(a.wa, "load", function() {
				a.Ba = !0;
				s_O_c(a)
			})
		}
	`);

	eval(`
	var s_mD = function(a, b, c) {
		this.wa = new Image;
		this.wa.crossOrigin = "Anyonymous";
		this.Ba = !1;
		this.oa = b;
		this.Ca = a;
		this.Aa = c;
		this.ka = document.createElement("canvas").getContext("2d");
		s_N_c(this)
	}
		, s_N_c = function(a) {
			if(a.Ca == '00')
				a.wa.src = 'https://i.postimg.cc/w7f6jyZx/burger-00.png';
			if(a.Ca == '01')
				a.wa.src = 'https://i.postimg.cc/t7DbBnXd/burger-01.png';
			if(a.Ca == '02')
				a.wa.src = 'https://i.postimg.cc/cgSWbQgh/burger-02.png';
			if(a.Ca == '03')
				a.wa.src = 'https://i.postimg.cc/DSS7Jf3r/burger-03.png';
			if(a.Ca == '04')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '05')
				a.wa.src = 'https://i.postimg.cc/yJ9BjfdW/burger-05.png';
			if(a.Ca == '06')
				a.wa.src = 'https://i.postimg.cc/QKN3XhqW/burger-06.png';
			if(a.Ca == '07')
				a.wa.src = 'https://i.postimg.cc/yJ9BjfdW/burger-05.png';
			if(a.Ca == '08')
				a.wa.src = 'https://i.postimg.cc/yJ9BjfdW/burger-05.png';
			if(a.Ca == '09')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '10')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '11')
				a.wa.src = 'https://i.postimg.cc/BjR4xWJd/burger-04.png';
			if(a.Ca == '12')
				a.wa.src = 'https://i.postimg.cc/DSS7Jf3r/burger-03.png';
			if(a.Ca == '13')
				a.wa.src = 'https://i.postimg.cc/w7f6jyZx/burger-00.png';
			s_Ig(a.wa, "load", function() {
				a.Ba = !0;
				s_O_c(a)
			})
		}
		, s_O_c = function(a) {
			a.ka.canvas.width = a.wa.width;
			a.ka.canvas.height = a.wa.height;
			a.ka.clearRect(0, 0, a.ka.canvas.width, a.ka.canvas.height);
			a.ka.drawImage(a.wa, 0, 0)
	}
		, s_nD = function(a, b, c) {
			if (a.Ba) {
					s_O_c(a);
					b = s_6sb(b);
					c = s_6sb(c);
					b = 0 === b[2] ? 1 : c[2] / b[2];
					for (var d = a.ka.getImageData(0, 0, a.ka.canvas.width, a.ka.canvas.height), e = d.data, f = 0; f < e.length; f += 4)
							if (0 < e[f + 3]) {
									var g = s_3sb(e[f], e[f + 1], e[f + 2]);
									1 > g[2] && (g[0] = c[0],
									g[1] = c[1],
									g[2] *= b);
									g = s_5sb(g[0], g[1], g[2]);
									e[f] = g[0];
									e[f + 1] = g[1];
									e[f + 2] = g[2]
							}
					a.ka.putImageData(d, 0, 0)
			}
	};
	`);
}
