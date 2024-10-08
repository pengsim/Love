const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    // const demo = document.querySelector('.demo');
    const demo4 = document.querySelector('.demo4');
    const demotext = document.querySelector('.demotext');
    const demo1 = document.querySelector('.demo1');
    const demo2 = document.querySelector('.demo2')
    const demo3 = document.querySelector('.demo3')
    // demo.innerHTML = '<img src="image1.png" alt="" width="200px" height="200px" class="myimg">';
    demo4.innerHTML = '<img src="phal.png" alt="" style="width: 200px; height: 200px; " class="myimg">';
    demo1.innerHTML = '<img src="pengsim.png" alt="" style="width: 200px; height: 200px; " class="myimg">';
    demo2.innerHTML = '<h1>&emsp14;&emsp14;I</h1>'+'<h1>love</h1>'+'<h1>You❤️<h1>'
    const text = "1000000%";
let index = 0;

function typeAnimation() {
  if (index < text.length) {
    demotext.innerHTML = `<h3>${text.substring(0, index + 1)}</h3>`;
    index++;
    setTimeout(typeAnimation, 500); // Slower speed (500ms)
  }
}

typeAnimation();
    
    demo3.innerHTML = '<h1>&emsp14;&emsp14;I</h1>'+'<h1>love</h1>'+'<h1>You❤️<h1>'
    // demo.classList.add('show'); 
    demo1.classList.add('show');  // Apply the show class to trigger the fade-in effect
    demo2.classList.add('show');
    demotext.classList.add('show'); 
    demo3.classList.add('show');
    demo4.classList.add('show'); 
});