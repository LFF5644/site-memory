const defaultImg="src/defaultImg.jpg";
const imgPlaceHolder=[
	"src/img([COUNTER]).jpg|10",
	"src/img([COUNTER]).png|2",
];

function getImgs(imgPlaceHolder){
	let imgType="";
	let imgs_list=[];
	for(imgType of imgPlaceHolder){
		imgType=imgType.split("|");
		let index=0;
		while(1){
			index+=1;
			imgs_list.push(imgType[0].replace("[COUNTER]",index));
			if(index==Number(imgType[1])){
				break;
			}
		}
	}
	return imgs_list;
}
function preloadImgs(imgUrls,barClass=null){
	let progress;
	if(barClass){
		progress=document.createElement("progress");
		progress.max=imgUrls.length;
		progress.value=0;
		progress.className=barClass;
		document.body.appendChild(progress);
	}
	let url="";
	for(url of imgUrls){
		const img=new Image();
		if(barClass){
			img.onload=()=>{progress.value+=1;if(progress.value==progress.max){progress.remove();}};
		}
		img.src=url;
	}
}

function placeImgs(imgs_list){
	const childs=[];
	let imgUrl="";
	let index=-1
	for(imgUrl of imgs_list){
		index+=1;
		const div=document.getElementById("div_memory");
		const element=document.createElement("img");
		element.src=defaultImg;
		element.imgUrl=imgUrl;
		element.imgId=index;
		element.toggleMode=true;
		element.onclick=event=>{
			const element=event.target;
			if(element.toggleMode){
				element.toggleMode=false;
				element.src=imgUrls[element.imgId];
			}else{
				element.toggleMode=true;
				element.src=defaultImg;
			}
		};
		div.appendChild(element);
		childs.push(element);
	}
	return childs;
}

const imgUrls=getImgs(imgPlaceHolder);

preloadImgs(imgUrls,"bottom");

placeImgs(imgUrls);
