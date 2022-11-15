from flask_cors import CORS
from flask import Flask, jsonify
import ArticleScraper

app = Flask(__name__)
CORS(app)
@app.route("/Articles")
def titles():
    return [{
             "id":1,
             "titles":ArticleScraper.wiredtitle_array[0],
             "img": ArticleScraper.wiredimg_array[0],
              "url": ArticleScraper.wiredurl_array[0],
             },
            {
             "id":2,
             "titles":ArticleScraper.wiredtitle_array[1],
             "img": ArticleScraper.wiredimg_array[1],
             "url": ArticleScraper.wiredurl_array[1],
            },
            {
             "id":3,
             "titles": ArticleScraper.thehackertitle_array[0],
             "img": ArticleScraper.thehackerimg_array[0],
             "url": ArticleScraper.thehackerurl_array[0],
            },
            {
             "id":4,
             "titles": ArticleScraper.thehackertitle_array[1],
             "img": ArticleScraper.thehackerimg_array[1],
             "url": ArticleScraper.thehackerurl_array[1],
            },
            {
             "id":5,
             "titles": ArticleScraper.venturebeattitle_array[0],
             "img": ArticleScraper.venturebeatimg_array[0],
             "url": ArticleScraper.venturebeaturl_array[0],
            },
            {
            "id": 6,
            "titles": ArticleScraper.venturebeattitle_array[1],
            "img": ArticleScraper.venturebeatimg_array[1],
            "url": ArticleScraper.venturebeaturl_array[1],
            }
            ]

if __name__ == "__main__":
    app.run(host = '192.168.1.123', port=8000, debug=False)