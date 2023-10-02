from flask import *
import random
import capybara
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
capybara_list = capybara.Capybara.get_capybaras()


@app.route("/")
def index():
  print(capybara_list)
  return random.choice(capybara_list)


app.run(host="0.0.0.0", port=8080)
