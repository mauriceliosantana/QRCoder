var btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    let userInput = document.querySelector('input').value

    if (userInput != '') {
        if (document.querySelector('.qrcode').childElementCount == 0) {
            generate(userInput)
        }else {
            document.querySelector('.qrcode').innerHTML = ''
            generate(userInput)
        }
        //
    }else {
        document.querySelector('.qrcode').style = 'display: none'
        console.log('Entrada inválida')
    }

})

function generate(userInput) {
    document.querySelector('.qrcode').style = ''

    new QRCode(document.getElementById('qrcode'), {
        text: userInput,
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })

    let download = document.createElement('button')
    document.querySelector('.qrcode').appendChild(download)

    let downloadLink = document.createElement('a')
    downloadLink.setAttribute('download', 'qr_code_link.png')
    downloadLink.innerText = 'Download'
    download.appendChild(downloadLink)

    if (document.querySelector('.qrcode img').getAttribute('src') == null) {
        setTimeout(() => {
            downloadLink.setAttribute(
                'href',
                `${document.querySelector('canvas').toDataURL()}`
            )
        }, 300)
    }else {
        setTimeout(() => {
            downloadLink.setAttribute(
                'href',
                `${document.querySelector('.qrcode img').getAttribute('src')}`
            )
        }, 300)
    }
}