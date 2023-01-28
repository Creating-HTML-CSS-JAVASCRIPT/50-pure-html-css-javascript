const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '838ede796bmshdc617a8614c8a62p14181fjsn63e2f84ad1d8',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};



let images=[]
const loading=document.getElementById("loading")
const container=document.getElementsByClassName("container")[0]
window.onload=()=>{
    fetch('https://online-movie-database.p.rapidapi.com/title/find?q=avatar', options)
	.then(response => response.json())
	.then(response => {
        images=response.results;
        imageshavebeenrecived()
    })
	.catch(err => alert('failed to load images'));
}

function imageshavebeenrecived(){
console.log(images)
loading.remove()

for(let i=0;i<images.length;i++){
    console.log(images[i])
    if(images[i].image!==undefined){
        container.appendChild(createimage(images[i]))
    }
    
}
}
function createimage(currimage){
    let imagelink=currimage.image.url
    const minicontainer=document.createElement("div")
    const image=document.createElement("img");
    const title=document.createElement("div")
    const overviewcontainer=document.createElement("div")
    const overview=document.createElement("div")
    const year=document.createElement("h1")
    overviewcontainer.append(year,overview)
    minicontainer.append(image,title,overviewcontainer)
    
    overviewcontainer.classList.add("overview")
    overview.innerHTML=" dummy texlorem Ipsum is simply dummlorem Ipsum is simply dummy tex lorem Ipsum is simply dummy texlorem Ipsum is simply dummy texthe release of Le";
    year.innerHTML="overview";
    
    image.src=imagelink;
    image.alt="movie images"
    //
    title.innerHTML=""+currimage.title;
    title.classList.add("title")
    //
    console.log(minicontainer)
    minicontainer.classList.add("minicontainer")
    return minicontainer;
}
