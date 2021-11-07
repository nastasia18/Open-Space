window.onload = function () {
    let result = 0;

    function move45() {
        let roc = document.querySelector('.rocket');
        roc.animate([  {
            // current position of your rocket
            left: roc.style.left,
            bottom: roc.style.bottom
        },
            { // final position of your rocket
                left: '440px',
                bottom: '100%'
            }
            ], {  // timing options
            duration: 2000,
            iterations: 1
        })
        setTimeout(function () {
            roc.classList.add('launch')
        }, 2000);
    }

    function itemChange(item) {
        if(item.getAttribute('type') === 'checkbox') {
            if(item.checked) {
                result++;
            } else {
                result--;
            }
        } else if(item.getAttribute('type') === 'range') {
            if(item.value === '100') {
                result++;
            }
        }
        if(result === 11) {
            btnLaunch.disabled = false;
        }
    }

    let inputs = document.querySelectorAll('input');
    let pass = document.querySelector('.input-password');
    let btnPass = document.querySelector('.btn-password');
    let btnLaunch = document.querySelector('.launch-btn');
    let rocket = document.querySelector('.rocket');

    inputs.forEach(function(item) {
        if((item.classList.contains('btn-password') === false) && (item.classList.contains('input-password') === false)) {
            item.disabled = true;
        }
    })
//TrustNo1
    btnPass.addEventListener("click", function() {
        if(pass.value === "TrustNo1") {
            inputs.forEach(function(item) {
                if((item.classList.contains('btn-password') === false) &&
                    (item.classList.contains('input-password') === false) &&
                    (item.classList.contains('launch-btn') === false)) {
                    item.disabled = false;
                } else {
                    item.disabled = true;
                }
            })
        }
    })

    inputs.forEach(function(item) {
        item.onchange = function() { itemChange(this);}
    })

    btnLaunch.addEventListener('click', function() {
        move45();
    })


}

