import fastapi
from models.context import ProductItem
from models.schema import serializeList, serializeDict
from database.db import connect_mongodb

router = fastapi.APIRouter()

PRODUCT_DB = connect_mongodb(collection_name="productions")

@router.get("/products", include_in_schema=False)
async def get_products():
    return serializeList(PRODUCT_DB.find())

@router.get("/products/{id}", include_in_schema=False)
async def get_one_product(id):
    print(type(id), id)
    return serializeDict(PRODUCT_DB.find_one({"id": id}))

@router.post("/products")
async def add_one_product(product: ProductItem):
    print(product)
    last_id = int(PRODUCT_DB.find().sort({"_id":-1}).limit(1)[0]["id"])

    added_infor = product.dict()
    added_infor["id"] = str(last_id+1)
    PRODUCT_DB.insert_one(added_infor)
    return serializeList(PRODUCT_DB.find())

@router.put("/products/{id}")
async def update_one_product(id, product: ProductItem):
    print(product.dict(), type(product))
    update_data = {k: v for k, v in product.dict().items() if v is not None}
    for key, value in update_data.items():
        if value is None:
            update_data.pop(key)
    print(update_data)
    PRODUCT_DB.find_one_and_update({"id": str(id)}, {
        "$set": update_data
    })
    return serializeDict(PRODUCT_DB.find_one({"id": id}))

@router.delete("/products/{id}")
async def delete_product(id):
    print(id)
    return serializeDict(PRODUCT_DB.find_one_and_delete({"id": str(id)}))
