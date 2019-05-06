/*
This function takes a json file and displays the related youtube imbed codes specified in that file and prints them out to the screen as iframes. These frames have an id of the song title followed by "iframe" like #whiteandnerdyiframe which can be used anywhere else
This function takes 3 parameters, width, height, and datafilename. The height and width specify the dimensions of each video and the datafilename specifies what filename its under in the "data" folder

*/
function displayVids(width, height, datafilename){ var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {if (xhr.readyState === 4) { var songs = JSON.parse(xhr.responseText); for(var key in songs){if(songs[key].iframe != null){var iframeidreplace =songs[key].iframe.replace("iframe ","iframe id=\""+key+"iframe"+"\" ");  songs[key].iframe = iframeidreplace; var iframewidthreplace =songs[key].iframe.replace("width=\"\"","width=\""+width+"\""); var iframeheightreplace =songs[key].iframe.replace("height=\"\"","height=\""+height+"\""); songs[key].iframe = iframeheightreplace; $('body').append(songs[key].iframe);}};}}; xhr.open('GET', 'data/'+datafilename+'.json'); xhr.send(); }

displayVids(100, 150, "weirdal");
