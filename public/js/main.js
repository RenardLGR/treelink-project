// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }


let cards = document.querySelectorAll('.card')

cards.forEach(card => {
    let color = card.parentNode.dataset.color
    console.log(color);
    card.style.backgroundColor = color
})


// ===========================================
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// function parse(str){
//   let value = 0
//   let res = []
//   for(let i=0 ; i<str.length ; i++){
//     switch (str[i]) {
//         case 'i':
//             value++
//             break;
    
//         case 'd':
//             value--
//             break

//         case 's':
//             value=value*value
//         break

//         case 'o':
//             res.push(value)
//             break
//         default:
//             break;
//     }
//   }
//   return res
// }

// function parseB(str){
//     let value = 0
//     let res = []

//     for(let i=0 ;i<str.length ; i++){
//         str[i] === 'i' ? value++ : str[i] === 'd' ? value-- : str[i] === 's' ? value=value*value : res.push(value)
//     }
//     return res
// }
// // console.log(parse('iiisdoso'));
// console.log(parseB('iiisdoso'));