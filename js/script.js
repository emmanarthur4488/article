const searchButton = document.getElementById('search-button'),
        searchClose = document.getElementById('search-close'),
        searchContent = document.getElementById('search-content')


if(searchButton){
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

if(searchClose){
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}





const loginButton = document.getElementById('login-button'),
        loginClose = document.getElementById('login-close'),
        loginContent = document.getElementById('login-content')


if(loginButton){
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}


const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove(show=scroll)
}
window.addEventListener('scroll', scrollUp)