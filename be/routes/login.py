import fastapi
from models.context import LoginItem
from models.schema import serializeList
from database.db import connect_mongodb

router = fastapi.APIRouter()

DB = connect_mongodb(collection_name="admin")


@router.get("/login/healthcheck", include_in_schema=False)
async def healthycheck():
    return {
        "message": "ok"
    }

@router.post("/login")
async def login(request_item: LoginItem):
    input_value = {
        "username": request_item.username,
        "password": request_item.password
    }

    result = DB.find_one(input_value)

    if result:
        return {
            "success": True,
            "message": "Login successful",
        }
