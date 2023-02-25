Была создана база данных (MySQL) и таблица (модель) ToDo.
Данная модель обладает следующими атрибутами: id, title, description, isDone.

Были реализованые методы Rest API, которые обращаются к докальному серверу по порту 3100:
Получить список со всеми ToDo - hhtp://localhost:3100/cards
Получить ToDo по id -  hhtp://localhost:3100/cards/:card_id
Создать ToDo -  hhtp://localhost:3100/cards/add
Редактировать ToDo по id -  hhtp://localhost:3100/cards/update/:card_id
Удалить ToDo по id -  hhtp://localhost:3100/cards/delete/:card_id
Удалить ВСЕ ToDo -  hhtp://localhost:3100/cards/delete/

* Создать список ToDo - hhtp://localhost:3100/cards/data *


Работа была протестирована в Postman.

 Стэк: mysql, sequelize, postman, node.js, express. 
