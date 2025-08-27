const mapBtn = document.getElementById('map-btn');
const mapIcon = document.getElementById('map');
const navOptions = document.getElementById('nav');
const docBody = document.getElementById('everything');
    const listContainer = document.getElementById("list-container");

mapBtn.addEventListener("mouseover", function(){
    map.style.display = "inline";
});
mapBtn.addEventListener("mouseout", function(){
    map.style.display = "none";
});
navOptions.addEventListener("click", function(event) {
    const listContainer = event.target;
    // const listContainer = document.getElementById("list-container");
    const docBody = document.getElementById('everything');
    
    if (!listContainer.contains(docBody)) {
        navOptions.style.top = "-100%";
        navOptions.style.display = "block";
        navOptions.style.position = "absolute";
    }
})


        function navShow(){
           navOptions.style.top = 0;
           navOptions.style.display = "block";
           navOptions.style.position = "fixed";
        }
        function navHide (){
           navOptions.style.top = "-100%";
           navOptions.style.display = "block";
           navOptions.style.position = "absolute";
        }

