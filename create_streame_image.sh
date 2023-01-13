mkdir streame_dir
echo "FROM node:12.4-alpine" > streame_dir/Dockerfile
echo "RUN mkdir /streame_app" >> streame_dir/Dockerfile
#echo "WORKDIR /streame_app" >> streame_dir/Dockerfile
echo "COPY package.json package.json" >> streame_dir/Dockerfile
echo "RUN npm install && mv node_modules /node_modules" >> streame_dir/Dockerfile
echo "COPY . ." >> streame_dir/Dockerfile
echo "CMD node app.js" >> streame_dir/Dockerfile
cd streame_dir
docker build -t streameapp_image .
docker run -t -d -p 3000:3000 --name streameapp_running streameapp_image
docker container ls -a
