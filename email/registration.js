const keys = require('../keys/index')

module.exports = function(email, password, name) {
    return {
        to: email,
        from: keys.EMAIL_FROM || 'evgenia.potiychuk@gmail.com',
        subject: 'Ваш аккаунт успешно создан',
        html: `
            <h1>${name}, добро пожаловать в магaзин Shop</h1>
            <hr>
            <p>Вы успешно создали аккаунт. Ваши данные для входа:</p>
            <ul>    
                <li>Email/логин: ${email}</li>
                <li>Пароль: ${password}</li>
            </ul>
            <p><a href="${keys.BASE_URI}/auth/login">Перейти на сайт</a></p>
            <hr>
            <p><small>Пожалуйста, никому не передавайте Ваши данные для входа в целях безопасности.</small></p>
        `,
      };
}