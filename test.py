from pymongo import MongoClient
mongo = MongoClient()
db=mongo.fullstack

res=db.groups.insert({"projecttype":"test"})
print res