import fastapi
from be.schema.context import LoginItem

router = fastapi.APIRouter()

ACCOUNTS = [
    {
        "username": "hlong.24082k@gmail.com",
        "password": "Hlong123456789"
    }
]

@router.get("/login/healthcheck", include_in_schema=False)
async def healthycheck():
    return {"message": "OK"}

@router.post("/login")
async def login(request_item: LoginItem):
    input_value = {
        "username": request_item.username,
        "password": request_item.password
    }

    if input_value in ACCOUNTS:
        print("a")
        return {
            "success": True,
            "message": "Login successful",
        }
