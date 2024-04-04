from pydantic import BaseModel, Field


class LoginItem(BaseModel):
    username: str = Field(...)
    password: str = Field(...)


class ProductItem(BaseModel):
    id: str = None
    nameProduct: str = None
    nameCustomer: str = None
    email: str = None
    number: str = None
    price: int = None
    status: bool = False
    date: str = None
    address: str = None
    detail: str = None


class UserItem(BaseModel):
    id: str = None
    name: str = None
    age: int = None
    sex: str = None
    email: str = None
    position: str = None
    number: str = None
    address: str = None
    basicSalary: int = 0
    dayOff: int = 0
    ot: int = 0
    total: int = 0
