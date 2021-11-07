let a=+prompt();
let b=+prompt();
let id = setInterval(function() {
    console.log(a)
	if (a == b) {
		clearInterval(id);
	} else {
		a++;
	}
}, 1000);