from flask import Blueprint, jsonify

reports_bp = Blueprint("reports", __name__)

@reports_bp.route("/api/report")
def report():
    return jsonify({
        "message": "Report API Working"
    })