# firstDockerTask

# creating 2 vol:

docker volume create vol_html
docker volume create vol_config

# run a container and attach the 2 volumes with it:

docker run -d --name my-nginx -v vol_html:/usr/share/nginx/html -v vol_config:/etc/nginx nginx

#change the html file 
echo "<html><body><h1>Hello, World! Updated Content.</h1></body></html>" > /usr/share/nginx/html/index.html

#delete the container
docker rm container_id

volume mount :

docker run -d   --name my-nginx1   -v vol_html:/usr/share/nginx/html   -v vol_config:/etc/nginx   -p 8080:80   nginx

bind mount:

mkdir bind_html
mkdir bind_config

docker run -it   --name my-nginx-bind   -v ~/bind_html:/usr/share/nginx/html   -v ~/bind_config:/etc/nginx   -p 8081:80   nginx
