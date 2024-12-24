from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Document Management API"}

@app.post("/upload/")
async def upload_document(file: UploadFile = File(...)):
    return {"filename": file.filename}
