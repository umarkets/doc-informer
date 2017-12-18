
Товары
=======

	 

Список товаров
--------------

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Адрес
     - Тип запроса
   * - /api/**(template|script)**/product/all
     - GET
	
	 
.. list-table:: Параметры запроса
   :widths: auto
   :header-rows: 1

   * - Обозначение
     - Тип
     - Описание
   * - offset
     - integer
     - смещение, с какого товара выводим
   * - limit
     - integer
     - лимит, какое кол-во товаров выводим
	 
	 
.. list-table::  Возвращаемые параметры
   :widths: auto
   :header-rows: 1
	 
   * - Обозначение
     - Тип
     - Описание
   * - product_id
     - integer
     - id товара
   * - name
     - string
     - название товара	 
   * - full
     - string
     - описание товара
   * - price	
     - integer	
     - цена
   * - price_old
     - integer   
     - старая цена	
   * - price_update	
     - integer	
     - стоимость обновления
   * - type_product	
     - integer	
     - тип продукта:
        * 0 - бесплатный
        * 1 - платный
   * - preview
     - string
     - превью-изображение
   * - images	
     - array
     - список изображений товара
   * - files	
     - string	
     - путь на файл-архив с товаром
   * - version	
     - string	
     - версия товара
   * - language	
     - integer
     - язык скрипта: **(только в маркете скриптов)**
        * 0 - все
        * 1 - JavaScript
        * 2 - PHP
   * - uapi
     - integer
     - используется uAPI: **(только в маркете скриптов)**
   * - is_bonus
     - integer
     - бонусный товар: **(только в маркете шаблонов)**	 	 
   * - video	
     - string	
     - ID видео-демонстрации **(только youtube)**
   * - website	
     - string
     - адрес демо-сайта
   * - new_updates	
     - string	
     - текст с описанием новых обновлений
   * - price_install
     - integer
     - стоимость установки, наценка на установку
   * - license_standart	
     - integer	
     - стоимость стандартной лицензии
   * - license_basic	
     - integer	
     - стоимость базовой лицензии
   * - license_expanded	
     - integer	
     - стоимость расширенной лицензии
   * - status	
     - integer
     - статус:
        * 0 - неактивен
        * 1 - активен		

.. tip:: Параметры **language** и **uapi** используются только в маркете скриптов
	 
.. tip:: Параметр **is_bonus** используется только в маркете шаблонов
	 
Товары категории
----------------

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Адрес
     - Тип запроса
   * - /api/**(template|script)**/product/category
     - GET
	 
.. list-table:: Параметры запроса
   :widths: auto
   :header-rows: 1

   * - Обозначение
     - Тип
     - Описание
   * - category_id
     - integer
     - идентификатор категории, товары которой необходимо получить
   * - offset
     - integer
     - смещение, с какого товара выводим
   * - limit
     - integer
     - лимит, какое кол-во товаров выводим	 
	 
.. list-table::  Возвращаемые параметры
   :widths: auto
   :header-rows: 1
	 
   * - Обозначение
     - Тип
     - Описание
   * - product_id
     - integer
     - id товара
   * - name
     - string
     - название товара	 
   * - full
     - string
     - описание товара
   * - price	
     - integer	
     - цена
   * - price_old
     - integer   
     - старая цена	
   * - price_update	
     - integer	
     - стоимость обновления
   * - type_product	
     - integer	
     - тип продукта:
        * 0 - бесплатный
        * 1 - платный
   * - preview
     - string
     - превью-изображение
   * - images	
     - array
     - список изображений товара
   * - files	
     - string	
     - путь на файл-архив со шаблоном/скриптом
   * - version	
     - string	
     - версия товара
   * - language	
     - integer
     - язык скрипта: **(только в маркете скриптов)**
        * 0 - все
        * 1 - JavaScript
        * 2 - PHP	
   * - uapi
     - integer
     - используется uAPI: **(только в маркете скриптов)**
   * - is_bonus
     - integer
     - бонусный товар: **(только в маркете шаблонов)**	 
   * - video	
     - string	
     - ID видео-демонстрации **(только youtube)**
   * - website	
     - string
     - адрес демо-сайта
   * - new_updates	
     - string	
     - текст с описанием новых обновлений
   * - price_install
     - integer
     - стоимость установки, наценка на установку
   * - license_standart	
     - integer	
     - стоимость стандартной лицензии
   * - license_basic	
     - integer	
     - стоимость базовой лицензии
   * - license_expanded	
     - integer	
     - стоимость расширенной лицензии
   * - status	
     - integer
     - статус:
        * 0 - неактивен
        * 1 - активен		

.. list-table:: В случае неуспеха
   :widths: auto
   :header-rows: 1

   * - status
     - error
   * - message
     - сообщение об ошибке
	 

.. tip:: Параметры **language** и **uapi** используются только в маркете скриптов		 

.. tip:: Параметр **is_bonus** используется только в маркете шаблонов

Данные товара
--------------

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Адрес
     - Тип запроса
   * - /api/**(template|script)**/product
     - GET
	 
.. list-table:: Параметры запроса
   :widths: auto
   :header-rows: 1

   * - Обозначение
     - Тип
     - Описание
   * - product_id
     - integer
     - идентификатор товара, данные которого необходимо получить
	 
.. list-table::  Возвращаемые параметры
   :widths: auto
   :header-rows: 1
	 
   * - Обозначение
     - Тип
     - Описание
   * - product_id
     - integer
     - id товара
   * - name
     - string
     - название товара
   * - full
     - string
     - описание товара
   * - price	
     - integer	
     - цена
   * - price_old
     - integer   
     - старая цена	
   * - price_update	
     - integer	
     - стоимость обновления
   * - type_product	
     - integer	
     - тип продукта:
        * 0 - бесплатный
        * 1 - платный
   * - preview
     - string
     - превью-изображение
   * - images	
     - array
     - список изображений товара
   * - files	
     - string	
     - путь на файл-архив со шаблоном/скриптом
   * - version	
     - string	
     - версия товара
   * - language	
     - integer
     - язык скрипта: **(только в маркете скриптов)**
        * 0 - все
        * 1 - JavaScript
        * 2 - PHP
   * - uapi
     - integer
     - используется uAPI: **(только в маркете скриптов)**
   * - is_bonus
     - integer
     - бонусный товар: **(только в маркете шаблонов)**	 	 
   * - video	
     - string	
     - ID видео-демонстрации **(только youtube)**
   * - website	
     - string
     - адрес демо-сайта
   * - new_updates	
     - string	
     - текст с описанием новых обновлений
   * - price_install
     - integer
     - стоимость установки, наценка на установку
   * - license_standart	
     - integer	
     - стоимость стандартной лицензии
   * - license_basic	
     - integer	
     - стоимость базовой лицензии
   * - license_expanded	
     - integer	
     - стоимость расширенной лицензии
   * - status	
     - integer
     - статус:
        * 0 - неактивен
        * 1 - активен		

.. list-table:: В случае неуспеха
   :widths: auto
   :header-rows: 1

   * - status
     - error
   * - message
     - сообщение об ошибке


.. tip:: Параметры **language** и **uapi** используются только в маркете скриптов

.. tip:: Параметр **is_bonus** используется только в маркете шаблонов

Количество товаров
------------------

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Адрес
     - Тип запроса
   * - /api/**(template|script)**/product/count
     - GET
	 
.. list-table:: Параметры запроса
   :widths: auto
   :header-rows: 1

   * - Параметры
   * - нет параметров
   
.. list-table:: В случае успеха
   :widths: auto
   :header-rows: 1

   * - count
   * - Общее количество товаров	

.. list-table:: В случае неуспеха
   :widths: auto
   :header-rows: 1

   * - status
     - error
   * - message
     - сообщение об ошибке
	 

	
Show history change code by author