from pymongo import MongoClient
from bson import json_util
from flask import Flask, request


def data_base(data_limit=1):
    client = MongoClient()

    db = client['new_york']
    restaurants_collection = db['restaurants']

    data = []

    for restau in restaurants_collection.find(limit=data_limit):
        data.append(restau)

    return data


def server():
    app = Flask(__name__)

    @app.route('/', methods=['GET'])
    def index():
        data_limit = int(request.args.get('limit'))
        data = json_util.dumps(data_base(data_limit))

        return data

    app.run(debug=True, port=3000)


def main():
    server()


main()
