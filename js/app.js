//variables
const listaTweete = document.getElementById('lista-tweets')

//eventos
eventListeners();

function eventListeners()
{
    //Cuando se envia eñ fprmulario

    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet);

    //borrar twets
    listaTweete.addEventListener('click', borrarTweet);

    document.addEventListener('DOMContentLoaded', localStorageListo)

}



function agregarTweet(e)
{
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    const foto = document.createElement('div')
    foto.classList= 'foto col-m-1 col-s-2'

    const texto = document.createElement('div')
    texto.classList = 'texto col-m-7 col-s-8'
    texto.innerText= tweet;

    const btnborrar= document.createElement('a')
        
    btnborrar.classList = 'btn col-m-1 offset-m-2 col-s-1 offset-s-1'
    btnborrar.innerText = 'X'

    const li = document.createElement('li')
    li.classList="col-m-12 col-s-12"
    li.appendChild(foto);
    li.appendChild(texto);
    li.appendChild(btnborrar);
    listaTweete.appendChild(li);

    agregarTweetLocalStorage(tweet);
}

function borrarTweet(e){
    e.preventDefault();
     console.log(e.target)
    if(e.target.className==='btn col-m-1 offset-m-2 col-s-1 offset-s-1'){
       
        e.target.parentElement.remove();
        borrarTweetLocalStorege(e.target.parentElement.innerText)
    }
}

function agregarTweetLocalStorage(tweet){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet)
    localStorage.setItem('tweets', JSON.stringify(tweets))
}


function obtenerTweetsLocalStorage()
{
    let tweets;

    if(localStorage.getItem('tweets')==null){
        tweets = []
    }
    else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets;
}

function localStorageListo()
{
    let tweets;
    tweets=obtenerTweetsLocalStorage()

    tweets.forEach(function(tweet){
        const foto = document.createElement('div')
        foto.classList= 'foto col-m-1 col-s-2'
    
        const texto = document.createElement('div')
        texto.classList = 'texto col-m-7 col-s-8'
        texto.innerText= tweet;
        const btnborrar= document.createElement('a')
        
        btnborrar.classList = 'btn col-m-1 offset-m-2 col-s-1 offset-s-1'
        btnborrar.innerText = 'X'
    
        const li = document.createElement('li')
        li.classList="col-m-12 col-s-12"
        li.appendChild(foto);
        li.appendChild(texto);
        li.appendChild(btnborrar);
        listaTweete.appendChild(li);

    })

}


function  borrarTweetLocalStorege(tweet){
    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0,tweet.length-1)

    tweets=obtenerTweetsLocalStorage()

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1)
        }
    })
    localStorage.setItem('tweets',JSON.stringify(tweets))

}