News-Project
video :https://vimeo.com/1070757944/2353fdb9f1?ts=0&share=copy

This project is a simple News Aggregator app that fetches and displays news articles from different sources. It allows users to search for news articles and view details like titles, descriptions, and images.

Features
- Search for news articles based on keywords
- Paginate through the results
- Display article titles, descriptions, and images

Technologies Used
- HTML
- CSS
- JavaScript
- API: News API ( '14bb64725ac146fb946b68cdc4521fa2')
 Installation
1. Clone the repository.
2. Open the `index.html` file in a web browser to see the app in action.
3. Deploy on web 01 and web 02

 Nginx Deployment

Overview
This document outlines the deployment process of Nginx on an Ubuntu server, including configuration and removal steps.

 Prerequisites
- Ubuntu server
- sudo privileges
- Internet access

## Deployment Steps
 1. Install Nginx
bash
sudo apt update
sudo apt install nginx -y


2. Start and Enable Nginx

sudo systemctl start nginx
sudo systemctl enable nginx


 3. Verify Installation

sudo systemctl status nginx

 4. Configure Nginx
- Navigate to the sites-available directory:
  bash
  cd /etc/nginx/sites-available/
  
- Create a new configuration file:
  bash
  sudo nano /etc/nginx/sites-available/default
  
- Set up the server block:
  nginx
  server {
      listen 80;
      server_name YOUR_SERVER_IP;
      root /var/www/html;
      index index.html;
      location / {
          try_files $uri $uri/ =404;
      }
  }
  
- Save and exit the file.

5. Restart Nginx
bash
sudo systemctl restart nginx


7. Test Nginx
- Open a browser and visit `http://YOUR_SERVER_IP/`.
- You should see the default Nginx welcome page or your configured website.



