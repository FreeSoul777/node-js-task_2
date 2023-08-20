# node-js-task_2
Данная работа сделана в учебных целях. Данный проект демонстрирует наивесшие интуитивное понимание ТЗ, а также скорость выполнения поставленной задачи сроком в два дня без знаний JS.

### Что нужно знать / уметь ?  
1. REST-API клиенты (Postman / Insomnia)  
2. Базы данных  
	Подключение  
	Запросы  
	Взаимодействия с БД  
	Просмотр информации в БД (Например: PgAdmin, DBeaver)  
	ORM (Object-relational mapping) библиотеки  
	Клиенты взаимодействия с БД  
3. Методы получения информации с сервера  
4. Серверная часть  
5. Асинхронные / Синхронные операции (Promise)

### Что выполнить ?
1. Создать в БД одну таблицу - ToDo  
	id: integer  
	title: string  
	description: string  
	isDone: boolean  
2. Реализовать серверную часть - API. CRUD  
	Получить список со всеми ToDo. GET /api/todos  
	Получить ToDo по id. GET /api/todos/{id}  
	Создать ToDo. POST /api/todos  
	Редактировать ToDo по id. PATCH /api/todos/{id}  
	Удалить ToDo по id. DELETE /api/todos/{id}  
	Удалить ВСЕ ToDo. DELETE /api/todos  
3. Протестировать все запросы любым вариантом  
	Insomnia, Postman, curl или vscode-rest-api  
4. После выполнения задание - весь исходный код необходимо залить на GIT (Github / GitLab)  

### Отчет по выполненной работе  
Была создана база данных (MySQL) и таблица (модель) ToDo.  
Данная модель обладает следующими атрибутами: id, title, description, isDone. Были реализованые методы Rest API, которые обращаются к локальному серверу по порту 3100:  
Получить список со всеми ToDo - hhtp://localhost:3100/cards  
Получить ToDo по id -  hhtp://localhost:3100/cards/:card_id  
Создать ToDo -  hhtp://localhost:3100/cards/add  
Редактировать ToDo по id -  hhtp://localhost:3100/cards/update/:card_id  
Удалить ToDo по id -  hhtp://localhost:3100/cards/delete/:card_id  
Удалить ВСЁ ToDo -  hhtp://localhost:3100/cards/delete/  

* Создать список ToDo - hhtp://localhost:3100/cards/data 
* !!! Поля Id никак не изменяются при удалении и добавлении, так как по умолчанию это поле считается мною таким же не изменяющимся автоматически, как и другие поля. (По условию задания).  
Работа была протестирована в Postman.  
Стэк: mysql, sequelize, postman, node.js, express. 
