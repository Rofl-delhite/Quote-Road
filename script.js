let inp = document.getElementById('inp');
let pass = document.getElementById('pass');
let btn = document.getElementById('btn').addEventListener('click', () => {
    let temp = document.getElementById('btn')
    if (inp.value == 'admin' && pass.value == 'admin') {
        temp.setAttribute('href', 'index1.html')
    }
    else {
        temp.setAttribute('href', '#')
        inp.value = 'Incorrect username or password!'
        pass.value = 'Incorrect username or password!'
        inp.style.color = 'red'
        pass.style.color = 'red'
    }
})


