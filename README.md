# template
template for start project

# Comands componet
yarn clear
yarn static
yarn dev

# Start project 
yarn
yarn static // собирает статику gulp sprite && gulp images && gulp fonts && gulp libs && gulp clearTrash
yarn dev // запускает вотчер и собирает компоненты

# Prod project 
yarn prod

If you whant add new font-famaly 
You can use mixin font-mixin
To start you need add new folder
Example: 
folderName=fontFamalyName/fontFamalyName-Regular.format
OpenSans/OpenSans-Regular.ttf

# SVGsprite 
Use 
<img src="path/sprite.svg#iconName">
or
.iconName {
    background: url(path/sprite.svg#iconName) no-repeat; 
}
or
Sass class name {.iconName}
Simple import sprite.scss in your main.sass and use class in html selector
ex.
<img class="iconName">

img(src="assets/icons/svg/spriteSVG.svg#mouse" alt="").svg-mouse-box
div.svg-mouse.svg-mouse-box
div.svg-iconFacebookGray-box.svg-iconFacebookGray
div.svg-iconInstagramGray-box.svg-iconInstagramGray
# Vmin Vmax
Vmin использует размер меньшей стороны. То есть если высота окна браузера меньше ширины, 1 vmin будет равен 1 vh. Если ширина браузера меньше его высоты, 1 vmin равен 1 vw.

Vmax использует большую сторону. Если ширина браузера больше его высоты, 1 vmax равен 1 vw. Если высота браузера больше ширины, 1 vmax равен 1 vh.

Если падает ошибка при старте проекта, сначала нужно проверпить все импорты в sass оставив толкько базовый styles
events.js:174
      throw er; // Unhandled 'error' event
      ^

Error: File not found with singular glob: /home/hp/Projects/iliagromov/template/dist/css/px/media/styles-calc.css (if this was purposeful, use `allowEmpty` option)

# Create componet
yarn cmp --c some2
return 
{
    <some2.component.pug>
    some2.component.sass
}
yarn cmp --c some2 --js
return 
{
    <some2.component.pug>
    some2.component.sass
    some2.component.js
}
# Remove componet
yarn cmp --r some2
return remove component

TODO: 
Преписать сборку на webpack
Добавить bable
