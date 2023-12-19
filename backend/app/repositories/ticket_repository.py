import json
from typing import Optional,List
from app.models.ticket_model import TicketType
class TicketRepository:
    def __init__(self, filepath: str):
        self.filepath = filepath
        with open(filepath) as json_file:
            self.data = json.load(json_file)

    def get_tickets(self, start: Optional[int] = None, stop: Optional[int] = None) -> List[TicketType]:
        return [TicketType(**ticket) for ticket in self.data["tickets"][start:stop]]    