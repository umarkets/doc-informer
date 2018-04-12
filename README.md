# Создание информеров в каркасе сайта

Данная документация описывает возможности создания информеров на этапе разбора каркаса шаблона сайта. Для работы этого функционала не требуется установка дополнительных настроек в панели управления. Работа функционала осуществляется только в Новой Панели Управления. 

## Общеие сведения
Для создания информера в каркасе сайта необходимо использовать тэги
```html
<!--<new_informer>--> <!--</new_informer>-->
```
Внутри тэгов размещается конфигурация желаемого информера. Сами поля и их значения могут отличатся в зависимости от модуля(блог, новости, и т.д.) и типа контента(материалы, категории). Описание параметров и значений отдельно описано в разделах модулей. Формат данных внутри тегов - json. 

## Механизм работы
При создании шаблонов происходит анализ каркаса. В случае если встречен тег начала и конца информера всё содержимое внутри тегов подвергается конвертации из формат JSON в формат внутреннего представления информера и создаётся запись в списке информеров. При этом происходит сверка наборов параметров с уже существующими информерами. Новый информер будет создан только в случае если такой конфигурации нет ни у одного созданного информера. Код создания информера будет заменён на код вывода нового или существующего информера. Таким образом во время разбора каркаса будут созданы лишь уникальные информеры. В случае если во время разбора JSON стурктуры возникнут ошибки, код создания информера будет заменён на текст ошибки. Валидации параметров на этапе создания информера не происходит.

## Пример
```
<!--<new_informer>-->{
  "title":"Новый информер 1",
  "module":"bl",
  "sort":"1",
  "max_entries":"5",
  "max_columns":"1",
  "data_type":"1",
}<!--</new_informer>-->
```
**Важно!** Если вы укажете пустой параметр, информер не будет создан. Не указывайте пустые параметры при создании информеров.
## Параметры информеров по модулям
 - [Новости](doc/News.md)
 - [Блог](doc/Blog.md)
 - [Каталог статей](doc/Publ.md)
 - [Фотоальбом](doc/Photo.md)
 - [Каталог файлов](doc/Load.md)
 - [Каталог сайтов](doc/Dir.md)
 - [Доска объявлений](doc/Board.md)
 - [Каталог игр](doc/Stuff.md)
 - [Магазин](doc/Shop.md)
 - [Видео](doc/Video.md)
 - [Форум](doc/Forum.md)
 - [Пользователи](doc/Users.md)
 - [Комментарии](doc/Comments.md)
 - [Теги](doc/Tags.md)
 - [Счётчики](doc/Counters.md)

# Инструкция по созданию архива шаблона для загрузки в umarket
1. Активируем все модуля в админ панели сайта;
2. На сайте umarket.ucoz.net в панели Автора https://prnt.sc/j2suqm необходимо добавить адрес сайта где вы создаете шаблон;
3. В разделе маркета "Резервные копии шаблонов" полный путь (Маркет - Мои шаблоны - Резервные копии шаблонов) создаем новый бэкап <a href="https://prnt.sc/ikxfij" target="_blank">https://prnt.sc/ikxfij</a> Скачиваем его себе на компьютер.
4. Все файлы, которые должны быть распакованы на сервере, архивируем в архив "resource.zip" <a href="https://prnt.sc/ikwn2j" target="_blank">https://prnt.sc/ikwn2j</a> и добавляем в архив шаблона. В результате у нас должна получиться такая структура архива <a href="https://prnt.sc/io0m4z" target="_blank">https://prnt.sc/io0m4z</a>;
5. Загружаем файл в панели управления umarket.ucoz.net https://prnt.sc/j2szea