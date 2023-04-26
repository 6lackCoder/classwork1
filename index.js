desktop = document.getElementById('desktop')
mobile = document.getElementById('mobile')


const show = () => {
    if(desktop.style.display === 'none'){
        desktop.style.display = 'block'
    } else {
        desktop.style.display = 'none'
    }

}
