import os
import sys
from pathlib import Path

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.exceptions import RequestValidationError
from loguru import logger

from errors.http_error import http_error_handler, validation_exception_handler
from routes.router import router as api_router
from starlette.middleware.cors import CORSMiddleware


sys.path.append(Path(__file__).parent.absolute().as_posix())


PORT = os.getenv("PORT")
DOMAIN = os.getenv("DOMAIN")


def get_app() -> FastAPI:
    app = FastAPI(
        title="Chat",
        description="APIs for Discord Clone",
        openapi_url="/openapi.json",
    )

    # This middleware enables allow all cross-domain requests to the API from a browser.
    # For production deployments, it could be made more restrictive.
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.add_exception_handler(HTTPException, http_error_handler)
    app.add_exception_handler(RequestValidationError, validation_exception_handler)

    app.include_router(api_router)

    return app


app = get_app()


@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Shutting down API")


if __name__ == "__main__":
    # In production, don't forget to change reload => False, debug => False
    # uvicorn.run(app, host="0.0.0.0", port=5050)
    uvicorn.run(app, host="0.0.0.0", port=5051)
    # uvicorn.run(app, host="0.0.0.0", port=5050, reload=True)
