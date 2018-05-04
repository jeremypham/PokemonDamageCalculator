from flask import Flask, render_template
from pkmn import pokemon

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/Pokemon')
def Pokemon():
    return render_template('Pokemon.html', pokemon)


if __name__ == '__main__':
    app.run(debug=True)