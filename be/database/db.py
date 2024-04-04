from pymongo.mongo_client import MongoClient


def connect_mongodb(config_path: str = None, collection_name: str=None):
    uri = "mongodb+srv://hlong:hoanglong2k@dreamtravel.uo6y9o7.mongodb.net/?retryWrites=true&w=majority&appName=DreamTravel"
    client = MongoClient(uri)

    try:
        client.admin.command("ping")
        print("Pinged your deployment.")
    except Exception as e:
        print(e)

    db = client["userManager"]
    return db[collection_name]


if __name__ == "__main__":
    db = connect_mongodb(collection_name="productions")
    last_id = int(db.find().sort({"_id":-1}).limit(1)[0]["id"])
    print(str(last_id+1))
