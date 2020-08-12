<!-- 
 Github : mrjatinchauhan
 Title  : deploy-heroku
-->

# Heroku

It is a cloud based application deployment and management service.  
Heroku works on the container based design system and these smart containers are known as dynos.  

1.Download Windows installer  
2.Running the installer to the system  
 Now, click on the installer file and it will ask for choosing components from the following options as given below.

```
Heroku cli
Adding heroku to system path
Adding local data
```

3.Set the destination folder  
4.Installation (After a couple of seconds Heroku CLI will be installed to the system completely.)  

Heroku CLI has been successfully installed on your system.

**To verify,Run the following command in the Command Prompt or Terminal.**  

```
heroku
```

**For checking the version of Heroku, Run the following command in the terminal:**  

```
heroku -v
```

5.Signing up for the Heroku services:  

**Login via terminal into Heroku CLI**    
For login through Heroku CLI Run the following command in terminal:  
```
heroku login
```

**Another method for logging is through the command prompt:**  
For doing it run the following command in the terminal  
```
heroku login -i
```

**Go to your directory** `cd facerecognitionbrain`
**to login on heroku** `heroku login`
 *Logged in as...*  

If you have already created your Heroku app, you can easily add a remote to your local repository 
with the `heroku git:remote` command. All you need is your Heroku app’s name:    
`heroku git:remote -a smart-facerecognitionbrain`  

```
git remote -v  
git add .  
git commit -m"deploy"  
git push heroku master  
heroku open  
		to view web app  
heroku logs --tail  

npm install serve --s  
npm audit fix  

heroku git:remote -a smart-facerecognitionbrain  

git remote -v  
git add .  
git commit -m"deploy fix"  
git push heroku master  
heroku open  
```

-----------------------

```
heroku create  
heroku open  
git remote -v  
git push heroku master  
heroku open  
heroku logs --tail  
git add .  
git commit -m"adding PORT"  
git push heroku master  
heroku open  
heroku addons  
heroku pg:info  
heroku pg:psql  
```

```
infinite-sands-25101::DATABASE=> CREATE TABLE login (id serial PRIMARY KEY,hash varchar(100) NOT NULL,email text UNIQUE NOT NULL);
CREATE TABLE
```

```
infinite-sands-25101::DATABASE=> CREATE TABLE users (id serial PRIMARY KEY,name VARCHAR(100),email text UNIQUE NOT NULL,entries BIGINT DEFAULT 0,joined TIMESTAMP NOT NULL);
CREATE TABLE
```

```
heroku pg:info
heroku addons

heroku config
git add .
git commit -m "adding database connection fix"
git push heroku master
heroku logs --tail
```
