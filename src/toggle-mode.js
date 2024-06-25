const buttonToggle = document.getElementById('toggle-mode');

let darkMode = true;

function handleDarkLightMode(event) {
  document.documentElement.classList.toggle('light')
  const iconClass = event.target

  if(iconClass.classList.contains('ph-sun')){
    darkMode = false;
  } else{
    darkMode = true;
  }

  const mode = darkMode ? 'light' : 'dark'
  
  const span = event.currentTarget.querySelector('span')
  span.innerText = `Ativar ${mode} mode!`
  
}



buttonToggle.addEventListener('click', handleDarkLightMode);
