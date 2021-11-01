# audioAns

### Video

[cache-prep.mkv](https://drive.google.com/file/d/1UDxsLIkTnXubVJa4Psuh272_opCA7X3C/view?usp=sharing)

### Instructions to run application on [localhost](http://localhost)

- Clone the Repository.
- Make a virtual environment.
- Change directory to server/ to navigate to the backend directory.
- Run `pip install -r requirements.txt` to install the dependencies.
- Create `.env` file set following variables - `AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_STORAGE_BUCKET_NAME`, all the files are uploaded on AWS
- Run `python manage.py makemigrations`.
- Run `python manage.py migrate`.
- Run `python manange.py runserver` to start the backend server.
- To view API Docs got to [http://127.0.0.1:8000/api/docs/](http://127.0.0.1:8000/api/docs/)
- Change directory to client/
- Run `npm install` to install all the react dependencies.
- Run `npm start` to run the frontend server.
- Now you good to go.
