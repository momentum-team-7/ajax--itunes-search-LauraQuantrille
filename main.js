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
    clearInput()
    search()
    
})

function clearInput(){
    let songs = document.querySelectorAll(".music-result")
    console.log({songs})
    for (let song of songs){
        song.remove()
    }
}

// function resultsList play audio?




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

    // let trackId = document.createElement('p')
    // trackId.innerHTML = song.trackId
    
    let previewUrl = song.previewUrl
    previewUrl.innerText = previewUrl




    // innerHTML, create divs, pull data from json and populate music card
    let playButton = document.createElement('button')
    playButton.innerText = 'Play'
    console.log('play button', playButton)


    resultDiv.appendChild(playButton)
    resultDiv.appendChild(collectionImg)
    resultDiv.appendChild(artistName)
    resultDiv.appendChild(trackName)
    resultDiv.appendChild(collectionName)
    resultList.appendChild(resultDiv)
    
    resultDiv.appendChild(trackId)
    resultDiv.appendChild(previewUrl)
    
    
}

// function clearInput(){

// }



// function playAudio(){
//     // const player = document.querySelector('.audio')
//     playButton.addEventListener('click', (event) => {
//         trackID = music.trackId
//         previewUrl = music.previewUrl
//     })
// }



// add eventListener to a button in html 
// pull preview url and trackID?

