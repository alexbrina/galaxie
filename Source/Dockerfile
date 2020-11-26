FROM nginx:1.17.6
RUN apt-get update && apt-get install -y nginx-extras
ENV APP_PATH /opt/dist
RUN mkdir -p $APP_PATH
COPY dist/{{tpl.identity}} $APP_PATH/
COPY nginx.conf /etc/nginx/nginx.conf
