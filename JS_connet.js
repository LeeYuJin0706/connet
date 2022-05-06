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
const slideList = document.querySelector('.slide-list');
const slideContents = document.querySelectorAll('.slide-content');
const pagination = document.querySelector('.slide-pagination');
const slidLen = slideContents.length;
const slideWidth = 1920;
const slideSpeed = 300


slideList.style.width = slideWidth * (slidLen) + "px";

let curIndex = 0;



