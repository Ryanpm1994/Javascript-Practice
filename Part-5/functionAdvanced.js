const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let colorIndex = -1;
 
function getNextRainbowColor() {
	if(++colorIndex >= colors.length) colorIndex = 0;
	return colors[colorIndex];
}

setInterval(function() {
 document.querySelector('.rainbow')
 .style['background-color'] = getNextRainbowColor();
}, 500);