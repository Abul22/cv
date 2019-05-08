let toggle = document.querySelector('.toggle')
toggle.onclick = (e) => {
    let classes = document.querySelector('.wrapper').classList

    if(classes.contains('collapsed'))
        classes.remove('collapsed')
    else
        classes.add('collapsed')
}

