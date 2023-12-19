from fastapi import APIRouter, Depends
from app.repositories.ticket_repository import TicketRepository
from app.config import TICKET_FILEPATH
from typing import Optional,List
from app.models.ticket_model import TicketType
router = APIRouter()

@router.get("/tickets", response_model=List[TicketType])
async def get_tickets(start: int = 0, stop: int = 20, ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
    tickets = ticket_repository.get_tickets(start, stop)
    return tickets