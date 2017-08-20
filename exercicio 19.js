#pragma strict

/*function Update () {

	if(Input.GetKey(KeyCode.Space)){
		(GetComponent("Grayscale") as MonoBehaviour).enabled = false;
		(GetComponent("SunShafts") as MonoBehaviour).enabled = false;
		(GetComponent("Bloom") as MonoBehaviour).enabled = false;
	}
	else{
	(GetComponent("Grayscale") as MonoBehaviour).enabled = true;
	(GetComponent("SunShafts") as MonoBehaviour).enabled = true;
	(GetComponent("Bloom") as MonoBehaviour).enabled = true;
	}
}*/
#pragma strict

var currentslowmotion: float = 0;
var slowtime : float = 2.0;

function Update(){
	
	if(Input.GetKey(KeyCode.Space)){	
		if(Time.timeScale == 1.0)
		Time.timeScale = 0.3;

		else
			Time.timeScale = 1.0;
			Time.fixedDeltaTime = 0.02 * Time.timeScale;

	}
	
	if(Time.timeScale == 0.3){
		currentslowmotion += Time.deltaTime;
	}

	if(currentslowmotion > slowtime){
		currentslowmotion = 0;
		Time.timeScale = 1.0
	}
}