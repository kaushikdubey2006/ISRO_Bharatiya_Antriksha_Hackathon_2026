from flask import Flask
from flask_cors import CORS

from routes.aqi import aqi_bp
from routes.hcho import hcho_bp
from routes.fire import fire_bp
from routes.reports import reports_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(aqi_bp)
app.register_blueprint(hcho_bp)
app.register_blueprint(fire_bp)
app.register_blueprint(reports_bp)


@app.route("/")
def home():
    return {
        "project": "ISRO BAH 2025",
        "status": "Backend Running",
        "version": "1.0"
    }


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)