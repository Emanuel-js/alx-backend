#!/usr/bin/env python3
"""
a python module to initiate a flask app
"""
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def Welcome():
    """
    Welcome - a route to a 0-index html
    """
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="5000")
