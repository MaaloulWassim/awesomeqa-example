from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from app.repositories.ticket_repository import TicketRepository
from app.repositories.message_repository import MessageRepository
from app.config import TICKET_FILEPATH
from typing import Optional,List
from app.models.ticket_model import TicketType
from app.models.message_model import MessageType

router = APIRouter()

@router.get("/tickets", response_model=List[TicketType])
async def get_tickets(start: int = 0, stop: int = 150, ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
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

@router.delete("/tickets/{ticket_id}", response_model=dict)
async def remove_ticket(ticket_id: str, ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
    removed = ticket_repository.remove_ticket(ticket_id)
    if not removed:
        raise HTTPException(status_code=404, detail="Ticket not found")
    return {"message": "Ticket removed successfully"}

@router.get("/tickets/{ticket_id}/messages", response_model=List[MessageType])
async def get_messages_for_ticket(ticket_id: str, ticket_repository: TicketRepository = Depends(lambda: TicketRepository(filepath=TICKET_FILEPATH))):
    messages = ticket_repository.get_messages_for_ticket(ticket_id)
    return messages