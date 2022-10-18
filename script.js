function emailSend() {
    let $output = document.getElementById('output');
    let $email = document.getElementById('email');
    let email = $email.value;

    if (!email) {
        $output.innerHTML = '<h4>Por favor insira um e-mail válido.</h4>';
        throw new Error
    }

    $output.innerHTML = `<h4>Enviamos um e-mail para ${email}. Voce recebera um link para finalizar seu cadastro.<br><b>Desde já agradecemos ☺️</b></h4>`
}