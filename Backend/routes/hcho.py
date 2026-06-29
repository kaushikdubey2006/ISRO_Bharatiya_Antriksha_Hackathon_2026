from flask import Blueprint, jsonify
import pandas as pd
import os
import traceback

hcho_bp = Blueprint("hcho", __name__)


def get_status(value):
    if value < 1.5:
        return "Low"
    elif value < 2.5:
        return "Moderate"
    elif value < 3.2:
        return "High"
    else:
        return "Critical"


@hcho_bp.route("/api/hcho", methods=["GET"])
def get_hcho():

    try:

        file_path = os.path.join(
            os.path.dirname(__file__),
            "..",
            "datasets",
            "HCHO.csv"
        )

        # Read CSV
        df = pd.read_csv(file_path)

        print("=" * 60)
        print("HCHO Dataset Loaded")
        print("Total Rows :", len(df))
        print("Unique Cities :", df["city"].nunique())
        print("=" * 60)

        # Remove missing values
        df = df.dropna(
            subset=[
                "city",
                "latitude",
                "longitude",
                "hcho"
            ]
        )

        print("Rows After DropNA :", len(df))

        result = []

        for _, row in df.iterrows():

            value = float(row["hcho"])

            result.append({

                "city": row["city"],

                "position": [
                    float(row["latitude"]),
                    float(row["longitude"])
                ],

                "value": round(value, 2),

                "prediction": float(row["prediction"]),

                "status": row["status"],

                "source": row["source"],

                "confidence": row["confidence"]

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