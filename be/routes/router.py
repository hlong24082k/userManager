import fastapi
from be.routes import login

router = fastapi.APIRouter()

router.include_router(login.router, tags = ["Login"])
