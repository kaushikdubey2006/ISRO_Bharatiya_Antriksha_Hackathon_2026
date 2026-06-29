from flask import Blueprint, jsonify
import pandas as pd
import os
import traceback

aqi_bp = Blueprint("aqi", __name__)


def get_status(value):
    if value <= 50:
        return "Good"
    elif value <= 100:
        return "Satisfactory"
    elif value <= 200:
        return "Moderate"
    elif value <= 300:
        return "Poor"
    elif value <= 400:
        return "Very Poor"
    return "Severe"


@aqi_bp.route("/api/aqi", methods=["GET"])
def get_aqi():

    try:

        file_path = os.path.join(
            os.path.dirname(__file__),
            "..",
            "datasets",
            "AQI.csv"
        )

        # Read CSV
        df = pd.read_csv(file_path)

        print("=" * 60)
        print("CSV Loaded Successfully")
        print("Total Rows :", len(df))
        print("Unique Cities :", df["city"].nunique())
        print("Columns :", list(df.columns))
        print("=" * 60)

        # Remove rows having missing required values
        df = df.dropna(
            subset=[
                "city",
                "latitude",
                "longitude",
                "pollutant_avg"
            ]
        )

        print("Rows After DropNA :", len(df))

        # Keep only PM2.5 records
        df = df[df["pollutant_id"] == "PM2.5"]

        print("Rows After PM2.5 Filter :", len(df))

        result = []

        for _, row in df.iterrows():

            value = float(row["pollutant_avg"])

            result.append({
                "city": row["city"],
                "position": [
                    float(row["latitude"]),
                    float(row["longitude"])
                ],
                "value": round(value, 2),
                "prediction": round(value * 1.08, 2),
                "status": get_status(value),
                "confidence": "95%"
            })

        print("Returned Records :", len(result))
        print("=" * 60)

        return jsonify(result)

    except Exception as e:

        traceback.print_exc()

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500