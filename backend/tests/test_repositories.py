from app.repositories.message_repository import MessageRepository
from app.repositories.ticket_repository import TicketRepository
from app.config import TICKET_FILEPATH

def test_get_all_messages():
    repo = MessageRepository(filepath=TICKET_FILEPATH)
    messages = repo.get_all_messages()
    assert isinstance(messages, list)

def test_get_all_tickets():
    repo = TicketRepository(filepath=TICKET_FILEPATH)
    tickets = repo.get_tickets()
    assert isinstance(tickets, list)

