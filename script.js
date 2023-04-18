

document.addEventListener("input",(e) =>{
    var value = e.target.value
    var link = "https://pokeapi.co/api/v2/pokemon/"
    var url = link + value
    fetch(url).then((Response)=>{
        return Response.json().then((data)=>{
        console.log(data);
        document.getElementById('name').innerHTML = data.name
        document.getElementById('img').innerHTML =`<img src="${data.sprites.front_default}"width="200px">`
        if(data.name = ''){
            document.getElementById('name').innerHTML = ""
        }
        })
    })
})