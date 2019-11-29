/*
generate a lloop to log the following triangle in the console:

#
##
###
####
#####
######
#######

*/

const seven = "1234567";
let result = "#";
for (let i = 0; i < seven.length; i++) {
	console.log(result);
	result = result + "#";
}

/* OUTPUT
#
##
###
####
#####
######
#######
*/
