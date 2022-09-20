//DECLARATIONS
const deleteBtns = document.querySelectorAll('.del')
const upArrowBtns = document.querySelectorAll('.upArrow')
const downArrowBtns = document.querySelectorAll('.downArrow')


Array.from(deleteBtns).forEach((el)=>{
    el.addEventListener('click', deleteCard)
})

Array.from(upArrowBtns).forEach((el)=>{
    el.addEventListener('click', positionUp)
})

Array.from(downArrowBtns).forEach((el)=>{
    el.addEventListener('click', positionDown)
})



//SERVER CALLS
async function deleteCard(){
    //this function decreases every cards that come after the one deleted one position (pushing them to the top)
    //and deletes the card we want to delete
    const cardId = this.parentNode.dataset.id
    const position = Number(this.parentNode.dataset.position)
    try{
        Array.from(document.querySelectorAll('.card-edit')).forEach(async (el) => {
            //decreases for every card that comes after the one deleted
            if(Number(el.dataset.position)>position){
                let cardId = el.dataset.id
                let pos = Number(el.dataset.position)
                const card = await fetch('/edit/editCardPosition', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'cardIdFromJSFile': cardId,
                        newPosition: pos-1
                    })
                })
                const data1 = await card.json()
                console.log(data1)
            }
        })
        
        //deletes the card
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

async function positionUp(){
    //this function decreases by one the position (pushing it to the top) of the card clicked
    //and increses by one the position (pushing it to the bottom) of the card that comes before
    //basically switching the position of the two
    const cardClickedId = this.parentNode.dataset.id
    const position = Number(this.parentNode.dataset.position)

    const previousCard = this.parentNode.parentNode.previousSibling.previousSibling
    const previousCardId = previousCard.childNodes[3].dataset.id
    const previousCardPos = Number(previousCard.childNodes[3].dataset.position)
    // console.log(previousCard);
    // console.log(previousCardId, previousCardPos);
    try {
        const cardClickedUp = await fetch('/edit/editCardPosition', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'cardIdFromJSFile': cardClickedId,
                newPosition: position-1
            })
        })
        const data1 = await cardClickedUp.json()
        console.log(data1)

        const previousCardDown = await fetch('/edit/editCardPosition', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'cardIdFromJSFile': previousCardId,
                newPosition: previousCardPos+1
            })
        })
        const data2 = await previousCardDown.json()
        console.log(data2)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}

async function positionDown(){
    //this function increases by one the position (pushing it to the bottom) of the card clicked
    //and decreases by one the position (pushing it to the top) of the card that comes after
    //basically switching the position of the two
    const cardClickedId = this.parentNode.dataset.id
    const position = Number(this.parentNode.dataset.position)

    const nextCard = this.parentNode.parentNode.nextSibling.nextSibling
    const nextCardId = nextCard.childNodes[3].dataset.id
    const nextCardPos = Number(nextCard.childNodes[3].dataset.position)
    // console.log(nextCard);
    // console.log(nextCardId, nextCardPos);
    try {
        const cardClickedDown = await fetch('/edit/editCardPosition', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'cardIdFromJSFile': cardClickedId,
                newPosition: position+1
            })
        })
        const data1 = await cardClickedDown.json()
        console.log(data1)

        const nextCardUp = await fetch('/edit/editCardPosition', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'cardIdFromJSFile': nextCardId,
                newPosition: nextCardPos-1
            })
        })
        const data2 = await nextCardUp.json()
        console.log(data2)
        location.reload()
    } catch(err) {
        console.log(err)
    }

}





//STYLING
let cards = document.querySelectorAll('.card')

cards.forEach(card => {
    let color = card.dataset.color
    // console.log(color);
    card.style.backgroundColor = color
})