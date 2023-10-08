

import { addContainer } from "../addContainer";


export class Order {

    static instance = null;
    constructor() {
        if (!Order.instance) {
            Order.instance = this;
            this.element = document.createElement('order');
            this.element.classList.add('order');
            this.containerElement = addContainer(this.element, "footer__container");
            this.isMounted = false;
        }



        return Order.instance;
    }


    mount() {
        if (this.isMounted) {
            return;
        }

        const Order = document.getElementById('Order');

        this.containerElement.append(Order);

        this.containerElement.insertAdjacentHTML('beforeend', this.getHTML());

        document.body.append(this.element);
        this.isMounted = true;
    }
    unmount() {
        this.element.remove();
        this.isMounted = false;
    }



    getHTML() {
        return `
    <div class="order__place-info">
    <div class="order__place">
        <h3 class="order__place-subtitle">Заказ успешно размещен</h3>
        <p class="order__place-number">№43435</p>
        <p class="order__place-price">20&nbsp;000&nbsp;₽</p>
    </div>
    <h3 class="order__place-subtitle">Данные доставки</h3>
    <table class="order__place-table table">
        <tr class="order__place-row">
        <td class="order__place-filed">Получатель</td>
        <td class="order__place-value">Иванов Петр Александрович</td>
        </tr>
        <tr class="order__place-row">
        <td class="order__place-filed">Телефон</td>
        <td class="order__place-value">+7 (737) 346 23 00</td>
        </tr>
        <tr class="order__place-row">
        <td class="order__place-filed">E-mail</td>
        <td class="order__place-value">Ivanov84@gmail.com</td>
        </tr>
        <tr class="order__place-row">
        <td class="order__place-filed">Адрес доставки</td>
        <td class="order__place-value">Москва, ул. Ленина, 21, кв. 33</td>
        </tr>
        <tr class="order__place-row">
        <td class="order__place-filed">Способ оплаты</td>
        <td class="order__place-value">Картой при получении</td>
        </tr>
        <tr class="order__place-row">
        <td class="order__place-filed">Способ получения</td>
        <td class="order__place-value">Доставка</td>
        </tr>

    </table>

    <button class="order__place-btn" type="submit">На главную</button>
    </div>`;}
}

