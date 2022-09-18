const deleteBtns = document.querySelectorAll('.del')
// const editBtns = document.querySelectorAll('.edit')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtns).forEach((el)=>{
    el.addEventListener('click', deleteCard)
})

// Array.from(editBtns).forEach((el)=>{
//     el.addEventListener('click', editCard)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function deleteCard(){
    const cardId = this.parentNode.dataset.id
    try{
        const response = await fetch('/edit/deleteCard', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'cardIdFromJSFile': cardId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// async function editCard(){

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
    let color = card.dataset.color
    console.log(color);
    card.style.backgroundColor = color
})


