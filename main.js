const urlBase = "https://itunes.apple.com/search?parameterkeyvalue"
const form = document.querySelector('.form')
const resultList = document.querySelector('#results-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchMusic = document.querySelector('.search').value
    console.log('search music', searchMusic)
    function search() {
        fetch ('https://itunes.apple.com/search?term=' + searchMusic)
        .then(respond => respond.json())
        .then(data => {
            console.log(data)
       
    
        
    })
    }
    search()
    
})




// function search() {
//     fetch ('https://itunes.apple.com/search?')
//     .then(respond => respond.json())
//     .then(data => {
//         console.log(data)
   

    
// })
// }

