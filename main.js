var dirt=5;
var magic= 1;
var metal=0;
var workers=0;
var timemonium=0;
var availableWorkers=0;
var workersCost= [5,1];
var dirtWorker=0;
var metalWorker=0;
var magicWorker=0;
function addWorker(){
	if (dirt >= workersCost[0]&& magic >= workersCost[1]){
		dirt=dirt-workersCost[0];
		magic = magic - workersCost[1];
		workers+= 1;
		availableWorkers+=1
		workersCost[0] = workersCost[0] * 4;
		workersCost[1]= workersCost[1]*4;
		document.getElementById('Dirt').innerHTML = dirt;
		document.getElementById('Magic').innerHTML = magic;
		document.getElementById('Workers').innerHTML = workers;
		document.getElementById('workerCost1').innerHTML = workersCost[0];
		document.getElementById('workerCost2').innerHTML = workersCost[1];
		document.getElementById('availWorkers').innerHTML = availableWorkers;
	}
	


}
function addDirt(num){
	dirt=dirt+num;
	document.getElementById('Dirt').innerHTML = dirt;
}
function getDirt(){
	var totalDirt=0
	totalDirt= dirtWorker/10
	return totalDirt
}
function addAvailWorker(num){
	if (availableWorkers>0){
		switch(num){
				case 1: // dirt
				dirtWorker+=1
				availableWorkers-=1
				document.getElementById('availWorkers').innerHTML = availableWorkers;
				document.getElementById('dirtWorkers').innerHTML = dirtWorker;
		}
		
		
		
	}
	
	
}
window.setInterval(function(){
addDirt(getDirt());
}, 100);