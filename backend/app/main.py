from app.repositories.ticket_repository import TicketRepository
import uvicorn
from fastapi import  FastAPI
from app.routers import ticket_route

app = FastAPI()

app.include_router(ticket_route.router, tags=["tickets"])
@app.get("/healthz")
async def root():
    return "OK"


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=5001, reload=True)
