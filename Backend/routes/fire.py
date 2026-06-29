from flask import Blueprint, jsonify
import pandas as pd
import os
import traceback

fire_bp = Blueprint("fire", __name__)


def get_status(brightness):
    if brightness < 330:
        return "Low"
    elif brightness < 350:
        return "Moderate"
    elif brightness < 370:
        return "High"
    else:
        return "Critical"


@fire_bp.route("/api/fire", methods=["GET"])
def get_fire():

    try:

        file_path = os.path.join(
            os.path.dirname(__file__),
            "..",
            "datasets",
            "fire.csv"
        )

        df = pd.read_csv(file_path)

        print("=" * 60)
        print("Fire Dataset Loaded")
        print("Total Rows :", len(df))
        print("=" * 60)

        df = df.dropna(
            subset=[
                "city",
                "latitude",
                "longitude",
                "brightness"
            ]
        )

        result = []

        for _, row in df.iterrows():

            brightness = float(row["brightness"])

            result.append({

                "city": row["city"],

                "position": [
                    float(row["latitude"]),
                    float(row["longitude"])
                ],

                "brightness": brightness,

                "frp": float(row["frp"]),

                "confidence": row["confidence"],

                "status": get_status(brightness),

                "satellite": row["satellite"],

                "source": row["source"],

                "date": row["acq_date"],

                "time": row["acq_time"]

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