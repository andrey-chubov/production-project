cd ~/production-project/
npm run build:prod apiUrl=https://xn----7sbbn6aiige3b6c6e.su:8443

rm -rf ~/../var/www/production_project/html
mv ~/production-project/build  ~/../var/www/production_project/html