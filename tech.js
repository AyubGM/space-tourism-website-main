

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
    const one = document.querySelector('#one-btn')
    const two = document.querySelector('#two-btn')
    const three = document.querySelector('#three-btn')
    const img = document.querySelector('.Timg ')
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('tech__info')
        })
        tabs.forEach(tab => {
          tab.classList.remove('tech__info')
          tab.ariaSelected = "false";
        })
       
        tab.ariaSelected = "true";
        target.classList.add('tech__info')
      })
  
    })

    one.addEventListener('click', () => {
      img.src = "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
    })


    two.addEventListener('click', () => {
      img.src ="./starter-code/assets/technology/image-spaceport-portrait.jpg"

    })

    three.addEventListener('click', () => {
      img.src = "./starter-code/assets/technology/image-space-capsule-portrait.jpg"
      
    })


