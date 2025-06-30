const mapBtn = document.getElementById('map-btn');
const mapIcon = document.getElementById('map');
const navOptions = document.getElementById('nav');

mapBtn.addEventListener("mouseover", function(){
    map.style.display = "inline";
});
mapBtn.addEventListener("mouseout", function(){
    map.style.display = "none";
});


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

