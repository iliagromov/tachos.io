https://sitehere.ru/kak-nastroit-lokalnyj-server-na-ubuntu



sudo /etc/init.d/apache2 start — запуск локального сервера

sudo /etc/init.d/apache2 stop — остановка сервера

sudo /etc/init.d/apache2 restart — перезапуск apache

sudo a2enmod rewrite

sudo a2enmod userdir


sudo gedit /etc/apache2/sites-available/

А в этом файле прописать следующие строки(не забудьте изменить имя пользователя "user" на имя своего пользователя в системе):
<VirtualHost *:80>
ServerAlias test1 www.test1 DocumentRoot /home/user/sites/test1 <Directory home/user/sites/test1/> AllowOverride All </Directory> </VirtualHost>

sudo gedit /etc/hosts

Осталась совсем малость. Осталось запустить данный сайт командой
sudo a2ensite test1. А затем перезапустить денвер

sudo /etc/init.d/apache2 restart
systemctl reload apache2

Всё! Сейчас ваш сайт доступен по адресу «http://test1/» в браузере!


"Forbidden. 
You don't have permission to access / on this server. "

Тогда попробуйте сделать следующее. Вместо создания файла :

sudo gedit /etc/apache2/sites-available/test1

нужно создать файл:

sudo gedit /etc/apache2/sites-available/test1.conf
sudo gedit /etc/apache2/sites-available/tfaza.conf

т.е. напрямую указать что это конфигурационный файл, дописав в конце расширение ".conf" . И уже в этот конфигурационный файл записать всё описанное выше, а так же добавить ещё пару строк:


<VirtualHost *:80>
         ServerAdmin webmaster@test.com
         ServerName test.com

         DocumentRoot /var/www/html/test
         <Directory />
                 Options FollowSymLinks
                 AllowOverride All
         </Directory>
         <Directory /var/www/html/test/>
                 Options Indexes FollowSymLinks MultiViews
                 AllowOverride All
                 Order allow,deny
                 allow from all
         </Directory>

         ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
         <Directory "/usr/lib/cgi-bin">
                 AllowOverride All
                 Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
                 Order allow,deny
                 Allow from all
         </Directory>

         ErrorLog ${APACHE_LOG_DIR}/error.log

         # Possible val
         ues include: debug, info, notice, warn, error, crit,
         # alert, emerg.
         LogLevel warn

         CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

<VirtualHost *:80>
	 ServerAlias rschip.io http://www.rschip.io
         DocumentRoot /home/hp/Projects/rschip.io/backend
        
         <Directory /home/hp/Projects/rschip.io/backend>
          	RewriteEngine on
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule . index.php
	   	 
              	Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
		 
         </Directory>


</VirtualHost>

<VirtualHost *:80>
	 ServerAlias aroma-business.io http://www.aroma-business.io
         DocumentRoot /home/hp/Projects/aroma-business.io/backend
        
         <Directory /home/hp/Projects/aroma-business.io/backend>
          	RewriteEngine on
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule . index.php
	   	 
              	Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
		 
         </Directory>


</VirtualHost>
sudo a2ensite dr.krysin.io


<VirtualHost *:80>
	 ServerAlias wi.site https://www.wi.site
         DocumentRoot /home/hp/Projects/wellbeing-index/build
        DirectoryIndex index.php
         <Directory /home/hp/Projects/wellbeing-index/build>
         	AllowOverride All
		Require all granted
         
         </Directory>


</VirtualHost>

<VirtualHost *:80>
	 ServerAlias vue.io https://www.vue.io/
         DocumentRoot /home/hp/Projects/vue.dev.io/vue.io/backend
        DirectoryIndex index.php
         <Directory /home/hp/Projects/vue.dev.io/vue.io/backend>
         	RewriteEngine on
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule . index.php
	   	 
              	Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
         
         </Directory>


</VirtualHost>
<VirtualHost *:80>
	ServerAlias leilyyoga.io https://www.leilyyoga.io/
        DocumentRoot /home/hp/Projects/leilyyoga/backend
        DirectoryIndex index.php
         <Directory /home/hp/Projects/leilyyoga/backend>
         	RewriteEngine on
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule . index.php
	   	 
              	Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
         
         </Directory>


</VirtualHost>