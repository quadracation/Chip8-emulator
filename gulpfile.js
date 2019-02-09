// Gulpfile
/*	[CONVENTIONS]:
 *	--------------------------------------------------------------
 * 	Named are to be specific! They must indicate what they do (as verbs).
 * 		- Use camelCase where the first word is in full lowercase (justLikeThis(...)).
 * 	Functions for Gulp to run ae written as:
 * 		gulp.task( 'taskName', function() {
 			//your code here. . .
 		});
 *    	- It's a statement of: gulp.task('name', function);
 * 	Inside the main [.yml] file in the Repository, type inside the use area (at the bottom):
 * 		- script: gulp takName
 *
 * 	Make sure you have gulp-util installed on your command prompt/terminal (all of them)
 * 		- 1. Powershell
 * 		- 2. Command Prompt
 * 		- etc. . . .
 *
 * For future testers or testers who have forgotten, you can install gulp via:
 * 		- 1. Going to your terminal (all/any)
 * 		- 2. Go to a suitable directory for you (easily accessed) and copy paste the code from this into there.
 * 			- 2.a I recommend you install it inside your main Project Directory holding all every file
 * 		- 3. Inside the Terminal, install gulp via:
 * 			- 3.a npm install gulp
 * 			- 3.b (for some users): npm install gulp -g
 * 			- 3.c npm install gulp-util --save-dev
 *
 * 	(: Happy Testing!
 *
 * 	WRITTEN BY:
 * 		Jin (PM)
 */
//------------------------------------------------------------------

//Code starts here:

var gulp = require('gulp');

//tasks

gulp.task('default', function() {
  console.log('GULP IS RUNNING')
});
