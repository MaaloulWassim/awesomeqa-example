from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from app.repositories.ticket_repository import TicketRepository
from app.config import TICKET_FILEPATH
from typing import Optional,List
from app.models.ticket_model import TicketType

router = APIRouter()

@router.get("/tickets", response_model=List[TicketType])
async def get_tickets(start: int = 0, stop: int = 20, ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
    tickets = ticket_repository.get_tickets(start, stop)
    return tickets


@router.get("/tickets/{ticket_id}", response_model=TicketType)
async def get_ticket(ticket_id: str, ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
    ticket = ticket_repository.get_ticket_by_id(ticket_id)
    if not ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")
    return ticket

@router.get("/ticketscount",response_model=dict)
async def get_tickets_count( ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
    opened_count = ticket_repository.get_number_of_open_tickets()
    total_count = ticket_repository.get_tickets_count()
    return {"opened": opened_count,"closed": total_count-opened_count ,"total": total_count }
