 dirt=new BigNumber(5)
 magic= new BigNumber(1)
 metal=new BigNumber(0)
 workers=new BigNumber(0)
timemonium=new BigNumber(0)
 availableWorkers=new BigNumber(0)
 workersCost1= new BigNumber(5)
 workersCost2= new BigNumber(1)
 dirtWorker=new BigNumber(0)
 metalWorker=new BigNumber(0)
 magicWorker=new BigNumber(0)
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
	dirt.add(num);
	document.getElementById('Dirt').innerHTML = dirt.toNumber();
}
function getDirt(){
	totalDirt= new bigNumber(0);
	totalDirt.add(dirtWorker).dividedBy(10);
	return totalDirt.toNumber();
}
function addAvailWorker(num){
	if (availableWorkers.comparedTo(0)>0){
		switch(num){
				case 1: // dirt
				dirtWorker.add(1);
				availableWorkers.minus(1);
				document.getElementById('availWorkers').innerHTML = availableWorkers.toNumber();
				document.getElementById('dirtWorkers').innerHTML = dirtWorker.toNumber();
		}
		
		
		
	}
	
	
}
window.setInterval(function(){
addDirt(getDirt());
}, 100);
