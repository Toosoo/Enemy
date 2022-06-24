
let rythm = new Rythm()

rythm.setMusic('./assets/song/enemy.mp3')

let tl = gsap.timeline()

gsap.to(".lightning-1",{
 keyframes:{
    "0%": {opacity:0},
    "25%" : {opacity:1, ease:"bounce"},
    "50%" : {opacity:0},
    "75%" : {opacity:1, ease:"bounce"},
    "100%": {opacity:0},
 } ,
 repeat:-1, 
 duration:1,
 repeatDelay:1,

})


   

gsap.set(".pauseBtn",{opacity:0})
let song = document.getElementById("song"); 
let playBtn = document.getElementById("playBtn"); 

gsap.set(".glass",{
    opacity:0,
    rotate:100,
})

// gsap.set(".enemy",{
//     marginTop:"120px",
// })



playBtn.addEventListener("click",()=> {


  gsap.to(".enemy",{
    marginTop:"0",
    duration:1,
    ease:"power4.inOut"
})
    if( rythm.start()) {
        console.error()
        rythm.start()
    } 
   

   
    rythm.addRythm('pg', 'pulse', 0, 10)
    rythm.addRythm('glass', 'pulse', 0, 50)
    


    tl.to(".startBtn",{
        opacity:0,
        ease:"power2.in",
        duration:1,
        rotate:360,
        transformOrigin:"center center"
    })
    tl.to(".pauseBtn",{
        opacity:1,
        ease:"power4.inOut",
        duration:1,
        rotate:360,
        transformOrigin:"center center",
        delay:.2
    },"<") 



    
gsap.to(".lightning-2",{
    keyframes:{
       "0%": {opacity:0},
       "5%": {rotate:200,top:0,left:0},
       "10%": {opacity:0},
       "50%" : {opacity:1, ease:"bounce",},
       "100%" : {opacity:0},
     
    } ,
    repeat:-1, 
    duration:.6,
    repeatDelay:6,
    delay:1,

})
 
    
    tl.to(".overlay",{
        opacity:.8,
        duration:.5,
        ease:"power4.inOut",
        
    },"<.5")
    
    tl.to(".pg-1",{top:"5%",left:"70%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-2",{top:"20%",left:"15%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-3",{top:"30%",left:"60%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-4",{top:"40%",left:"20%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-5",{top:"50%",left:"80%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-6",{top:"65%",left:"10%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-7",{top:"70%",left:"60%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-8",{top:"80%",left:"15%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-9",{top:"90%",left:"80%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    tl.to(".pg-10",{top:"50%",left:"200%",duration:.5,rotate:100,opacity:1,ease:"power4.inOut"},"<")
    

    tl.to(".glass",{
        opacity:1,
        rotate:0,
        ease:"power4.inOut",
        duration:1,
        delay:2
    })
    

    
    
}) 

