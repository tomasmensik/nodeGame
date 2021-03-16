const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
resize();


let pos = { x: 0, y: 0 };

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);


function setPosition(e) {
  pos.x = e.clientX - 400;
  pos.y = e.clientY - 100;
}

function resize() {
	ctx.canvas.width = 1100;
	ctx.canvas.height = 450;
  }

function draw(e) {

  if (e.buttons !== 1) return;

  ctx.beginPath(); 

  ctx.lineWidth = 1;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); 

  ctx.stroke();
};

//module.exports = setPosition;

