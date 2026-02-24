from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["JWT_SECRET_KEY"] = "super-secret-key"

db = SQLAlchemy(app)
jwt = JWTManager(app)

# ---------------- USER MODEL ----------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

with app.app_context():
    db.create_all()

# ---------------- HOME ----------------
@app.route("/")
def home():
    return "Flask Server Running ✅"

# ---------------- REGISTER ----------------
@app.route("/api/register", methods=["POST"])
def register():
    data = request.json

    if User.query.filter_by(username=data["username"]).first():
        return jsonify({"msg": "User already exists"}), 400

    new_user = User(
        username=data["username"],
        password=data["password"]
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User Registered Successfully"})

# ---------------- LOGIN ----------------
@app.route("/api/login", methods=["POST"])
def login():
    data = request.json

    user = User.query.filter_by(
        username=data["username"],
        password=data["password"]
    ).first()

    if not user:
        return jsonify({"msg": "Invalid Credentials"}), 401

    token = create_access_token(identity=user.username)
    return jsonify({"token": token})

# ---------------- DASHBOARD ----------------
@app.route("/api/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()
    return jsonify({"msg": f"Welcome {current_user} 👋"})

# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run(debug=True)