const keys = require('../keys/index')

module.exports = function(email, password) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Ваш новый пароль',
        html: `
        <h1>Поздравляем, Вы успешно сменили пароль!</h1>
        <p>Теперь Ваши данные для входа: </p>
        <ul>
            <li>Email/логин: ${email}</li>
            <li>Пароль: ${password}</li>
        </ul>
        `
    }
}