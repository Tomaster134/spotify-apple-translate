from flask import Flask
from config import Config
from app.models import db, User
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)

from app.blueprints.auth import auth
from app.blueprints.api import api

app.register_blueprint(auth)
app.register_blueprint(api)