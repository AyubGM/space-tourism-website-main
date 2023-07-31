

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
    const moon = document.querySelector('#moon-btn')
    const mars = document.querySelector('#mars-btn')
    const europa = document.querySelector('#europa-btn')
    const titan = document.querySelector('#titan-btn')
    const img = document.querySelector('.Dimg')
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('planet__info')
        })
        tabs.forEach(tab => {
          tab.classList.remove('planet__info')
          tab.classList.remove('active')
         
        })
       
        tab.classList.remove('active')
        target.classList.add('planet__info')
      })
  
    })

    moon.addEventListener('click', () => {
      img.src = "./starter-code/assets/destination/image-moon.png"
    })


    mars.addEventListener('click', () => {
      img.src ="./starter-code/assets/destination/image-mars.png"
    })

    europa.addEventListener('click', () => {
      img.src = "./starter-code/assets/destination/image-europa.png"
    
    })

    titan.addEventListener('click', () => {
      img.src = "./starter-code/assets/destination/image-titan.png"
    })

 

