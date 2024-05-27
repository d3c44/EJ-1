document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Nombre de Usuario:', username);
    console.log('Contraseña:', password);

    if (username === 'Daniel' && password === '12345') {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});