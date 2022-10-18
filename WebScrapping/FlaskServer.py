from flask_cors import CORS
from flask import Flask, jsonify
import ArticleScraper

app = Flask(__name__)
CORS(app)
@app.route("/Articles")
def titles():
    return [{"titles":ArticleScraper.wiredtitle_array[0],
             "img": ArticleScraper.wiredimg_array[0],
              "url": ArticleScraper.wiredurl_array[0],
             },
            {"titles":ArticleScraper.wiredtitle_array[1],
             "img": ArticleScraper.wiredimg_array[1],
             "url": ArticleScraper.wiredurl_array[1],
            },
            {"titles": ArticleScraper.wiredtitle_array[2],
             "img": ArticleScraper.wiredimg_array[2],
             "url": ArticleScraper.wiredurl_array[2],
            },
            {"titles": ArticleScraper.thehackertitle_array[0],
             "img": ArticleScraper.thehackerimg_array[0],
             "url": ArticleScraper.thehackerurl_array[0],
            },
            {"titles": ArticleScraper.thehackertitle_array[1],
             "img": ArticleScraper.thehackerimg_array[1],
             "url": ArticleScraper.thehackerurl_array[1],
            },
            {"titles": ArticleScraper.venturebeattitle_array[0],
             "img": ArticleScraper.venturebeatimg_array[0],
             "url": ArticleScraper.venturebeaturl_array[0],
            },
            ]

if __name__ == "__main__":
    app.run(host = '10.0.0.231', port=8000, debug=False)