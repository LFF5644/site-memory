const defaultImg="src/defaultImg.jpg"
const imgs=[
	"src/img ([COUNTER]).jpg|10",
	"src/img ([COUNTER]).png|2",
];

let imgType;
let imgs_list=[];
for(imgType of imgs){
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



let imgUrl;
let index=-1
for(imgUrl of imgs_list){
	const div=document.getElementById("div_memory");
	const element=document.createElement("img");
	element.src=imgUrl;
	element.height="100";
	element.imgId=
	div.appendChild(element);
}
console.log(imgs_list);