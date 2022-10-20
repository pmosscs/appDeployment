let factBtn = document.querySelector('.factbtn');
let picBtn = document.querySelector('.seeAliens');
let alienPic = document.querySelector('.alien-pic');

factBtn.addEventListener('click', () => {
    alert('Aliens are real.')
})

const getAlienPic = () => {
    alienPic.classList.toggle('aliencss')
    axios.get('/pic').then(res => {
        let { data } = res
        console.log(data);

        let alienImg = document.querySelector('.alien-pic');

        alienImg.src = data;

    }) 
}

picBtn.addEventListener('click', getAlienPic);
