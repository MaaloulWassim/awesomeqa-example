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
    
    def get_ticket_by_id(self, ticket_id: str) -> Optional[TicketType]:
        for ticket in self.data["tickets"]:
            if ticket["id"] == ticket_id:
                return TicketType(**ticket)
        return None    

    def get_tickets_count(self) -> int:
        return len(self.data["tickets"])
    
    def get_number_of_open_tickets(self) -> int:
        open_tickets = sum(1 for ticket in self.data["tickets"] if ticket["status"] == "open")
        return open_tickets