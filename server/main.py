import uvicorn
from fastapi import FastAPI
from routes.router import router as api_router


app = FastAPI()
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "ok"}


if __name__ == "__main__":
    # In production, don't forget to change reload => False, debug => False
    # uvicorn.run(app, host="0.0.0.0", port=5050)
    uvicorn.run(app, host="0.0.0.0", port=5051)
