const keys = require('../keys/index')

module.exports = function(email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Восстановление доступа',
        html: `
            <h1>Сброс пароля</h1>
            <p>Если это не Вы, то проигнорируйте это сообщение</p>
            <p>Иначе, <a href="${keys.BASE_URI}/auth/password/${token}">Перейдите по этой ссылке</a></p>
            <p><small>Ссылка действительна 1 час</small></p>
        `
    }
}