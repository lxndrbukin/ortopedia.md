from fastapi import FastAPI, APIRouter
from db import engine, Base
from db_models.items import Item, ItemTranslation, ItemImage
from db_models.categories import (
    Category, 
    CategoryTranslation, 
    CategoryImage
)

Base.metadata.create_all(bind=engine)

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