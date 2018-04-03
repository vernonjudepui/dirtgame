var dirt=new BigNumber(5);
var magic= new BigNumber(1);
var metal=new BigNumber(0);
var workers=new BigNumber(0);
var timemonium=new BigNumber(0);
var availableWorkers=new BigNumber(0);
var workersCost1= new BigNumber(5);
var workersCost2= new BigNumber(1);
var dirtWorker=new BigNumber(0);
var metalWorker=new BigNumber(0);
var magicWorker=new BigNumber(0);
function addWorker(){
	if (dirt.comparedTo(workersCost1) >=0 && magic.comparedTo(workersCost2) >= 0{
		dirt.minus(workersCost1);
		magic.minus(workersCost2);
		
		workers.plus(1);
		availableWorkers.plus(1);
		workersCost1.multipliedBy(4);
		workersCost2.multipliedBy(4);
		document.getElementById('Dirt').innerHTML = dirt;
		document.getElementById('Magic').innerHTML = magic;
		document.getElementById('Workers').innerHTML = workers;
		document.getElementById('workerCost1').innerHTML = workersCost1;
		document.getElementById('workerCost2').innerHTML = workersCost2;
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
