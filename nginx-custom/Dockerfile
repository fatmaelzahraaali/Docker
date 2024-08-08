FROM nginx

COPY html /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/nginx.conf

#listen to port 8080
EXPOSE 8080

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]