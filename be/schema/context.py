from pydantic import BaseModel, Field


class LoginItem(BaseModel):
    username: str
    password: str
