import React from 'react';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, []);

    function getMemeImage() {
        let randomMeme = Math.floor(Math.random()* allMemeImages.length);
        let imgUrl = allMemeImages[randomMeme].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: imgUrl
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return(
        <main>
            <div className='form'>
                <input type="text" className='form--inputs' placeholder="top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className='form--inputs' placeholder="bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button type='button' className='form--button' onClick={getMemeImage}>Get a new image 🖼</button>
            </div>
            <div className='meme'>
                <img  src={meme.randomImage} alt="meme" className='meme--image'></img>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    );
}