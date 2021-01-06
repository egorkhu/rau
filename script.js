//Task 1
const centerBlock = document.querySelector('.center-block')
style = {
    width: '50px',
    height: '50px',
    backgroundColor: 'black',
    margin: '0 auto'
}

Object.keys(style).map((elem) => {
    centerBlock.style[elem] = style[elem]
})

anime({
    targets: centerBlock,
    rotateZ: 360,
    loop: true,
    easing: 'linear',
    duration: 2000
});

//Task 2
(function() {
    const canvas = this.__canvas = new fabric.Canvas('canvas', {
        width: '600',
        height: '150',
    });


    let triangle = new fabric.Triangle({
        top: 50,
        left: 200,
        width: 50,
        height: 50,
        scaleX: 1,
        scaleY: 1,
        fill: 'black',
        selectable: false,
        hoverCursor: 'default'
    })

    canvas.add(triangle)

    canvas.on('mouse:over', function(e) {
        if (e.target) {
            animateIn(e.target)
        }
    });

    canvas.on('mouse:out', function(e) {
        if (e.target) {
            animateOut(e.target)
        }
    });

    function animateIn(item) {
        if (item === triangle) {
            triangle.animate('scaleX', 1.5)
                    .animate('scaleY', 1.5, {
                        duration: 500,
                        onChange: canvas.renderAll.bind(canvas)
                    })
        }
    }

    function animateOut(item) {
        if (item === triangle) {
            triangle.animate('scaleX', 1)
                    .animate('scaleY', 1, {
                        duration: 500,
                        onChange: canvas.renderAll.bind(canvas)
                    })
        }
    }

})();

//Task 3
const svgWrapper = document.querySelector('#task-3')
let wrapperWidth = svgWrapper.offsetWidth

let draw = SVG().addTo(svgWrapper).size('100%', '100%')

let line = draw.line(0, 0, wrapperWidth - 50, 0).move(50, 25)
line.stroke({ color: '#f06', width: 10})

window.onresize = () => {
    wrapperWidth = svgWrapper.offsetWidth
    line.width(wrapperWidth - 50)
}

//Task 4 (without library)
let lists = document.querySelectorAll('.list')
let items = document.querySelectorAll('.elem')

for (let list of lists) {
    list.addEventListener('dragover', e => {
        e.preventDefault()
    })

    list.addEventListener('drop', e => {
        e.preventDefault()

        let id = e.dataTransfer.getData('id')

        list.appendChild(document.querySelector(`#${id}`))
    })
}

for (let item of items) {
    item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('id', e.target.id)
    })
}

//Task 4 (using library)
let el = document.querySelector('.list-2');

new Sortable(el, {
    animation: 150,
    ghostClass: 'gray-item'
});

