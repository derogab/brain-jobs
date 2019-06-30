FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy folders
COPY brainjobs-backend ./brainjobs-backend
COPY brainjobs-frontend ./brainjobs-frontend
COPY brainjobs-gateway ./brainjobs-gateway

# Install dependences
RUN cd brainjobs-backend && npm install
RUN cd brainjobs-gateway && npm install

# Install Process Manager
RUN npm install -g pm2

# Open ports
EXPOSE 8080 8081 8082

# Start 
CMD cd brainjobs-backend && \
    pm2 start index.js --name backend && \
    cd .. && \
    cd brainjobs-gateway && \
    pm2 start index.js --name gateway && \
    pm2 logs