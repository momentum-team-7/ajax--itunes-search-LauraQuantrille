const urlBase = "https://itunes.apple.com/search?parameterkeyvalue"
const form = document.querySelector('.form')
const resultList = document.querySelector('.results-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchMusic = document.querySelector('.search').value
    console.log('search music', searchMusic)
    function search() {
        fetch ('https://itunes.apple.com/search?term=' + searchMusic)
        .then(respond => respond.json())
        .then(data => {
            console.log(data)
            for (let song of data.results) {
                renderSearchResults(song)
            }
            console.log(data.results[0].artistName)
            
        
    })
    }
    search()
    
})


function renderSearchResults(song){
    const resultDiv = document.createElement('div')
    resultDiv.className = 'music-result'

    let collectionImg = document.createElement('img')
    collectionImg.className = 'album-art'
    collectionImg.src = song.artworkUrl100


    let artistName = document.createElement('p')
    artistName.className = 'artist-name'
    artistName.innerHTML = song.artistName

    let trackName = document.createElement('p')
    trackName.className = 'track-name'
    trackName.innerHTML = song.trackName
    
    let collectionName = document.createElement('p')
    collectionName.className = 'album-title'
    collectionName.innerHTML = song.collectionName

    // innerHTML, create divs, pull data from json and populate music card
    resultDiv.appendChild(collectionImg)
    resultDiv.appendChild(artistName)
    resultDiv.appendChild(trackName)
    resultDiv.appendChild(collectionName)
    resultList.appendChild(resultDiv)
    // can you combine elements in append child?
    // clearInputs()
}





