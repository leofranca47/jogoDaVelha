document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        //foi necessário usa essa funçao de tempo por causa que o alert dispara antes de aparecer o 
        // ultimo objeto
       setTimeout(()=>{
        alert("O Jogo Acabou o vencedor foi: " + symbols[playerTime]);
       },10)
    }
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position);
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

// function updateSquares(){

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square)=>{
//         let position = square.id;
//         let symbol = board[position];

//         if(symbol != ''){
//             square.innerHTML = `<div class='${symbol}'><div>`
            
//         }
//     })
// }

     function reset(){

        let squares = document.querySelectorAll(".square");
         
            board = ['','','','','','','','',''];
            playerTime = 0;
            symbols = ['o', 'x'];
            gameOver = false;

        squares.forEach((square)=>{
            
            square.innerHTML = "";             
        })
    }