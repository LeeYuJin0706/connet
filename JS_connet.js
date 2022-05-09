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

mainSlide();

// ㅡㅡㅡㅡㅡㅡㅡ 메인 슬라이드 ㅡㅡㅡㅡㅡㅡ //
function mainSlide(){
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

setInterval(() => {
    next();
}, 5000);


function buttonClick(){
    if(moveCheck){
        moveCheck = false;
        index = this.buttonIndex;
        setButton();
        moveSlide(1500);
        setTimeout(function(){
            moveCheck = true;
        }, 1000);
    }
    
}

function next() {
    index++;
    setButton();
    moveSlide(1000);
    
    setTimeout(function(){
        if(index === sliderLength+1){
            index = 1;
            moveSlide(0);
        }
    }, 1000)
}

function moveSlide(time){
    slideList.style.transition = time + 'ms';
    slideList.style.transform = "translateX(-" + 100*(index) + "vw)";
}

function setButton(){
    for(let i = 0; i < slideRoundButtons.length; i++){
        slideRoundButtons[i].style.backgroundColor = ''
    }
    if(index<4)
    slideRoundButtons[index-1].style.backgroundColor = 'orange'
    else{
        slideRoundButtons[0].style.backgroundColor='orange';
    }
}
}
// ㅡㅡㅡㅡㅡㅡㅡ 메인 슬라이드 ㅡㅡㅡㅡㅡㅡ //

// ㅡㅡㅡㅡㅡㅡㅡ 원페이지 ㅡㅡㅡㅡㅡㅡ //

var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

// ㅡㅡㅡㅡㅡㅡㅡ 원페이지 ㅡㅡㅡㅡㅡㅡ //

// ㅡㅡㅡㅡㅡㅡㅡ 컨텐츠 슬라이드 ㅡㅡㅡㅡㅡㅡ //




