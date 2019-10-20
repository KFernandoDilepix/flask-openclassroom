from pymongo import MongoClient
from bson import json_util
from flask import Flask, request
from flask_cors import CORS


def data_base(data_limit=1):
    client = MongoClient()

    db = client['new_york']
    restaurants_collection = db['restaurants']

    data = []

    for restau in restaurants_collection.find(limit=data_limit):
        data.append(restau)

    return data


def control_data_quantity():
    data_limit = request.args.get('limit')

    if data_limit == None:
        data_limit = 1

    elif data_limit == 0:
        data_limit = 1

    else:
        data_limit = int(data_limit)

    data = json_util.dumps(data_base(data_limit))

    return data


def server():
    app = Flask(__name__)
    CORS(app)

    @app.route('/', methods=['GET'])
    def index():
        data = control_data_quantity()

        return data

    app.run(debug=True, port=3000)


def main():
    server()


main()
