const image = document.querySelectorAll("img")
const callback = dsads => {
  dsads.forEach(item => {
    if (item.isIntersecting) {
      const img = item.target
      const datasrc = img.getAttribute("data-src")
      img.setAttribute("src", datasrc)
      obseve.unobserve(img)
      console.log('jiazai');
    }
  })

}
const obseve = new IntersectionObserver(callback)
image.forEach(item => obseve.observe(item))