## Testing and Development
1. Navigate to the django-react-boilerplate directory.
```console
$ cd django-react-boilerplate
```
2. You may need to run the following lines once.
```console
$ python manage.py makemigrations
$ python manage.py migrate --run-syncdb
```
or
```console
$ python manage.py makemigrations
$ python manage.py migrate
```

Whenever you start the server, run the following line to start the development server at 127.0.0.1:8000.
```console
$ python manage.py runserver
```
When you only change python codes, you do not need to restart the server every time since django offers hot-reload.

3. Whenever you change your frontend codes such as index.js and index.css, run the following line.
```console
$ yarn build
```
4. If you are only developing frontend codes. You can use hot-reload. It is suggested to run the following line to start another development server at localhost:3000.
Remember that this server only contains frontend codes.

## Environment
Conda environment is used and the dependencies are shown in [requirements.txt](https://github.com/michaelfong2017/django_react_test/blob/master/django-react-boilerplate/requirements.txt).
1. Create conda environment, in my case, my environment name is django_react_test_env.
```console
$ conda create -n django_react_test_env python=3.7
$ conda activate django_react_test_env
```
2. Install dependencies.
```console
$ pip install -r requirements.txt
```
