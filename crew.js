

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
    const commander = document.querySelector('#commander-btn')
    const mission = document.querySelector('#mission-btn')
    const pilot = document.querySelector('#pilot-btn')
    const en = document.querySelector('#en-btn')
    const img = document.querySelector('.Cimg')
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('crew__info')
        })
        tabs.forEach(tab => {
          tab.classList.remove('crew__info')
          tab.ariaSelected = "false";
        })
       
        tab.ariaSelected = "true";
        target.classList.add('crew__info')
      })
  
    })

    commander.addEventListener('click', () => {
      img.src = "./starter-code/assets/crew/image-douglas-hurley.png"
    })


    mission.addEventListener('click', () => {
      img.src ="./starter-code/assets/crew/image-mark-shuttleworth.png"
    })

    pilot.addEventListener('click', () => {
      img.src = "./starter-code/assets/crew/image-victor-glover.png"
    
    })

    en.addEventListener('click', () => {
      img.src = "./starter-code/assets/crew/image-anousheh-ansari.png"
    })

 

