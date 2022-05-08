// ㅡㅡㅡㅡㅡㅡㅡ 모달창 ㅡㅡㅡㅡㅡㅡ //
const searchBtn = document.querySelector('.search-icon');
const searchInner = document.querySelector('.search-inner');
const searchExit = document.querySelector('.exit');

searchBtn.addEventListener('click',searchOn);
searchExit.addEventListener('click',searchOff);

console.log(searchInner.classList.contains('search-inner'));
console.log(searchInner.classList.contains('exit'));

searchInner.addEventListener('click', e => {
    const target = e.target;
    if(target.classList.contains('search-inner')){
        searchOn();
    }

    if(target.classList.contains('search-inner')){
        searchOff();
    }
})

function searchOn(){
    searchInner.style.display = 'flex';
}
function searchOff(){
    searchInner.style.display = 'none';
}
// ㅡㅡㅡㅡㅡㅡㅡ 모달창 ㅡㅡㅡㅡㅡㅡ //



// ㅡㅡㅡㅡㅡㅡㅡ 메인 슬라이드 ㅡㅡㅡㅡㅡㅡ //
let index = 1;
let moveCheck = true;
const slideList = document.querySelector('.slide-list');
const slideContents = document.querySelectorAll('.slide-content');
const sliderLength = slideContents.length; 

let copyFirst = slideList.firstElementChild.cloneNode(true);
let copyLast = slideList.lastElementChild.cloneNode(true);

slideList.appendChild(copyFirst);
slideList.insertBefore(copyLast, slideList.firstElementChild);


slideList.style.width = 100 * (sliderLength + 2) + "vw";
slideList.style.transform = "translateX(-" + 100 * (index) + "vw)";

let slideRoundButtons = document.querySelectorAll('.round-button');
for(let i = 0; i < slideRoundButtons.length; i ++){
    slideRoundButtons[i].buttonIndex = i + 1;
    slideRoundButtons[i].addEventListener('click',buttonClick)
}

slideRoundButtons[index-1].style.backgroundColor = 'orange';

function buttonClick(){
    if(moveCheck){
        moveCheck = false;
        clearButtno();
        this.style.backgroundColor = "orange";
        index = this.buttonIndex;
        moveSlide(2000);
        setTimeout(function(){
            moveCheck = true;
        }, 1000);
    }
}

function moveSlide(time){
    slideList.style.transition = time + 'ms';
    slideList.style.transform = "translateX(-" + 100*(index) + "vw)";
}

function clearButtno(){
    for(let i = 0; i < slideRoundButtons.length; i++){
        slideRoundButtons[i].style.backgroundColor = ''
    }
}
// ㅡㅡㅡㅡㅡㅡㅡ 메인 슬라이드 ㅡㅡㅡㅡㅡㅡ //