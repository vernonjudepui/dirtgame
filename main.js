import {BigNumber} from 'bignumber.js'
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
	if (dirt.comparedTo(workersCost1) >=0 && magic.comparedTo(workersCost2) >= 0){
		dirt.minus(workersCost1);
		magic.minus(workersCost2);
		
		workers.plus(1);
		availableWorkers.plus(1);
		workersCost1.multipliedBy(4);
		workersCost2.multipliedBy(4);
		document.getElementById('Dirt').innerHTML = dirt.toNumber();
		document.getElementById('Magic').innerHTML = magic.toNumber();
		document.getElementById('Workers').innerHTML = workers.toNumber();
		document.getElementById('workerCost1').innerHTML = workersCost1.toNumber();
		document.getElementById('workerCost2').innerHTML = workersCost2.toNumber();
		document.getElementById('availWorkers').innerHTML = availableWorkers.toNumber();
	}
	


}
function addDirt(num){
	dirt.plus(num);
	document.getElementById('Dirt').innerHTML = dirt.toNumber();
}
function getDirt(){
	var totalDirt= new bigNumber(0);
	totalDirt.plus(dirtWorker).dividedBy(10);
	return totalDirt.toNumber();
}
function addAvailWorker(num){
	if (availableWorkers.comparedTo(0)>0){
		switch(num){
				case 1: // dirt
				dirtWorker.plus(1);
				availableWorkers.minus(1);
				document.getElementById('availWorkers').innerHTML = availableWorkers.toNumber();
				document.getElementById('dirtWorkers').innerHTML = dirtWorker.toNumber();
		}
		
		
		
	}
	
	
}
window.setInterval(function(){
addDirt(getDirt());
}, 100);
