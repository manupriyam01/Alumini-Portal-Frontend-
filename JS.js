    const firstBasket = document.querySelector('.basket-1 span')
    const secondBasket = document.querySelector('.basket-2 span')
    const leftarrow = document.querySelector('.left-arrow')
    const rightarrow = document.querySelector('.right-arrow')

    const totalApples = 20

    let secondBasketAppleCount = 0
    let firstBasketAppleCount= totalApples - secondBasketAppleCount
        

    firstBasket.innerText = firstBasketAppleCount
    secondBasket.innerText = secondBasketAppleCount

    rightarrow.addEventListener('click', () =>{
        if(firstBasketAppleCount > 0){
        firstBasketAppleCount--
        firstBasket.innerText = firstBasketAppleCount
        secondBasketAppleCount++
        secondBasket.innerText = secondBasketAppleCount
        }
    })

    leftarrow.addEventListener('click', () =>{
        if(secondBasketAppleCount > 0){
            firstBasketAppleCount++
            firstBasket.innerText = firstBasketAppleCount
            secondBasketAppleCount--
            secondBasket.innerText = secondBasketAppleCount
        }
    })
