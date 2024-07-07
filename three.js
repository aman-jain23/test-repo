

// Callback Syntax 


function callone(fx){
    fx("Hello Everyone, I am a Callback Syntax\n")
}

async function mainone(){
    callone(function(value){
        console.log(value)
    })
}

// mainone()


// Promise (then) syntax


function calltwo(){
    let p = new Promise(function(resolve){
        resolve("Hi there I am Promise Syntax\n")
    });
    return p;
}

function maintwo(){
    calltwo().then(function(data){
        console.log(data);
    });
}

//maintwo()


// Async/Await Syntax


function callthree(){
    let p = new Promise(function(resolve){
        resolve("Hii there, I am Async Await Syntax\n")
    });
    return p;
}

async function mainthree(){
    let value = await callthree();
    console.log(value)
}

mainthree()