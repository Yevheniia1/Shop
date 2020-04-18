const keys = require('../keys/index')

module.exports = function(guest) {
    return {
        to: guest.email,
        from: keys.EMAIL_FROM,
        subject: 'Благодарим за Ваш заказ!',
        html: `
        <h1>${guest.name}, Ваш заказ №${guest.orderId} был успешно оформлен!</h1>
        <p><small>Дата оформления заказа: ${guest.date}</small></p>
        <p>Всего к оплате: ${guest.price} грн</p>
        <p>Ожидайте SMS сообщение о доставке</p>
        `
    }
}