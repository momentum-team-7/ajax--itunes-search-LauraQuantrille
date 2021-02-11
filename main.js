// const urlBase = "https://itunes.apple.com/search?"
const form = document.querySelector('.form')
const resultList = document.querySelector('.results-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchMusic = document.querySelector('.search').value
    console.log('search music', searchMusic)
    
    function search() {
        // fetch('broken url') to test error message
        fetch ('https://itunes.apple.com/search?term=' + searchMusic)
        .then(respond => respond.json())
        .then(data => {
            if (data.results.length > 0){
                console.log(data)
                for (let song of data.results) {
                    renderSearchResults(song)
                } 
            } 
            else {
            console.log('no result error')
               const noResult = document.createElement('div')
               noResult.innerText = "Whoops, we can't find anything with this name."
               resultList.appendChild(noResult)
               
            }
            // console.log(data.results[0].artistName)
            
        
    })
    .catch(error => {
        console.log('error is', error)
        catchError() })

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

    let playAudio = document.createElement('div')
    playAudio.className = 'play-button'
    playAudio.dataset.previewUrl = song.previewUrl

// save attribute in the data set 

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
    
    // let previewUrl = document.
    // previewUrl.innerText = song.previewUrl


    // innerHTML, create divs, pull data from json and populate music card
    let playButton = document.createElement('button')
    playButton.innerText = 'Play'
    console.log('play button', playButton)

    
    
    
    resultDiv.appendChild(collectionImg)
    resultDiv.appendChild(artistName)
    resultDiv.appendChild(trackName)
    resultDiv.appendChild(collectionName)
    playAudio.appendChild(playButton)
    resultDiv.appendChild(playAudio)
    
    resultList.appendChild(resultDiv)
    

    
    
    
    playButton.addEventListener('click', (event) => {
        playSong(event.target)
        console.log(event.target)
        
    })
    
}


function playSong(button){
    let audio = document.querySelector('audio')
    console.log(audio)
       audio.src = button.parentElement.dataset.previewUrl
    // console.log(button.parentElement.dataset.previewUrl)
    playSong.volume = .5
}

function catchError() {
    const errorEl = document.createElement('div')
    errorEl.innerText = 'Whoops! Try your search again...'
    resultList.appendChild(errorEl)

}


