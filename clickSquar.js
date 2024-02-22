window.addEventListener("load",function(){

    let originalSquare=document.getElementsByTagName("div")
    console.log(originalSquare.firstChilde)

    let copySquar =function(){
        for(let i=0;i<=originalSquare.length;i++){

        originalSquare[i].onclick=function(){

        let squreCopy=this.cloneNode(true);
        document.body.appendChild(squreCopy);
        squreCopy.onclick=this.onclick;
        this.onclick=null;
        
        }
        

        
  
    }
}
copySquar()

    
})
