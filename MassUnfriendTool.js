//First of all go to the friends page on your laptop replace the www in the url to m to view the mobile version
// type "javascript: " without quoations in the url then change the value of n in the following code at line 5, copy the following code after the "javascript: " in the url and press ENTER 
// TADAAA YOU'VE DONE MASS UNFRIENDING

var element = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _3cqr _8yzo _8yo0 _56bt');
var n =100 ; //This is the number of friends you've on facebook PLEASE NOTE THAT FACEBOOK LIMITS 250 UNFRIEND PER HOUR

//To Scroll Down to load as many friends as possible
for(var scroll = 0; scroll<15;scroll++){
window.scrollBy(0, 10000)
}

//To Click on Friend and Unfriend buttons
for(var count=0; count<n;count++){
element[count].click();
document.getElementsByClassName('_54k8 _55i1 _58a0 touchable')[1].click();
}
