
function like(){
    var container = document.querySelector("#container");
    
    container.addEventListener("dblclick",function(dets){
       var tl = gsap.timeline();
        tl.to("#container i",{
            transform: "scale(2)",
            color: "red"
        })
        tl.to("#container i",{
            transform: "scale(0)",
            delay : 1
        })
        
    })
}

like();