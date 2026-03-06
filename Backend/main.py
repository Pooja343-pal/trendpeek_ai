from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class LoginRequest(BaseModel):
    email: str
    password: str


@app.get("/")
def home():
    return {"message": "FastAPI Backend Running"}


@app.post("/login")
def login(data: LoginRequest):

    # fake authentication for now
    if data.email == "admin@test.com" and data.password == "1234":
        return {
            "status": "success",
            "message": "Login successful",
            "token": "fake-jwt-token"
        }

    return {
        "status": "error",
        "message": "Invalid credentials"
    }