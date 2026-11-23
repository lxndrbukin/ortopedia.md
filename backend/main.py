from fastapi import FastAPI, APIRouter

app = FastAPI(
    title="Ortopedia.MD",
    description="Ortopedia",
    version="1.0"
)

v1_router = APIRouter(prefix="/api/v1")
app.include_router(v1_router)

@app.get("/")
def home():
    return {
        "server": "Ortopedia.MD",
        "version": "1.0"
    }