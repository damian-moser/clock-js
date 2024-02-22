FROM nginx

WORKDIR /usr/share/nginx/html

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/damian-moser/clock-js.git /tmp/clock-js

RUN cp -r /tmp/clock-js/* .

RUN rm -rf /tmp/clock-js

EXPOSE 80