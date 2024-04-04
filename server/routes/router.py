import fastapi
from routes import login, product, user

router = fastapi.APIRouter()

router.include_router(login.router, tags = ["Login"])
router.include_router(product.router, tags = ["Product"])
router.include_router(user.router, tags = ["User"])
