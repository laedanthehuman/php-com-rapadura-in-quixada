class ProfileView{


    static mostraLogin(){
        document.querySelector('#btn-login').style.display = 'block'
        document.querySelector('#btn-logout').style.display = 'none'
    }

    static escondeLogin(){
        document.querySelector('#btn-login').style.display = 'none'
        document.querySelector('#btn-logout').style.display = 'block'
    }

}