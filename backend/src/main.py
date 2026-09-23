from fastapi import FastAPI

app = FastAPI(
    title="Retreival Augmented Agent",
    description="API for a retreival augmented agent",
    version="0.1.0"
)


@app.get("/health")
def health():
    return {"status": "OK"}