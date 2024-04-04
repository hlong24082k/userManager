import fastapi
from models.context import UserItem
from models.schema import serializeList, serializeDict
from database.db import connect_mongodb

router = fastapi.APIRouter()

USERS_DB = connect_mongodb(collection_name="users")

@router.get("/users", include_in_schema=False)
async def get_products():
    return serializeList(USERS_DB.find())


@router.get("/users/{id}", include_in_schema=False)
async def get_one_product(id):
    print(type(id), id)
    return serializeDict(USERS_DB.find_one({"id": id}))

@router.post("/users")
async def add_one_product(product: UserItem):
    print(product)
    last_id = int(USERS_DB.find().sort({"_id":-1}).limit(1)[0]["id"])

    added_infor = product.dict()
    added_infor["id"] = str(last_id+1)
    USERS_DB.insert_one(added_infor)
    return serializeList(USERS_DB.find())

@router.put("/users/{id}")
async def update_one_product(id, product: UserItem):
    print(product.dict(), type(product))
    update_data = {k: v for k, v in product.dict().items() if v is not None}
    for key, value in update_data.items():
        if value is None:
            update_data.pop(key)
    print(update_data)
    USERS_DB.find_one_and_update({"id": str(id)}, {
        "$set": update_data
    })
    return serializeDict(USERS_DB.find_one({"id": id}))


@router.delete("/users/{id}")
async def delete_product(id):
    print(id)
    return serializeDict(USERS_DB.find_one_and_delete({"id": str(id)}))
