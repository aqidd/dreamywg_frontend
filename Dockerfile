FROM nginx:alpine

COPY dist/tbay-ui /var/www/seba-frontend

COPY nginx/default.conf 		/etc/nginx/conf.d/default.conf
COPY nginx/gzip.conf    		/etc/nginx/conf.d/gzip.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
