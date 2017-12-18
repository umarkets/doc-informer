var watch = require('node-watch');
var shell = require('shelljs');
var moment = require('moment');

var file_change=0;
watch(['/usr/share/nginx/html/sphinx'], { recursive: true }, function(evt, name) {
  file_change=1;
});

shell.exec('make html');

setInterval(function(){
	if(file_change) {
		var time=moment().format('MMMM DD YYYY h:mm:ss');
		console.log(time);
		if (shell.exec('make html').code !== 0) {
		  shell.echo('Error: Git commit failed');
		  shell.exit(1);
		}
		file_change=0;
	}
},1500);