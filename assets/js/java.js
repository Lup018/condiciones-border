let button = document.getElementById('button');
button.addEventListener('click', () => {
    if (button.style.borderStyle != 'solid') {
        button.style.border = 'solid red 2px'
      } else {
        button.style.border = 'none'
      }      
}    
)