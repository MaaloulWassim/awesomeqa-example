from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

"""
Pydantic model representing information about a ticket.
Attributes:
        - id (str): The unique identifier of the ticket.
        - msg_id (str): The message ID associated with the ticket.
        - status (str): The status of the ticket.
        - resolved_by (Optional[str]): The ID of the moderator who resolved the ticket, if resolved.
        - ts_last_status_change (Optional[datetime]): The timestamp of the last status change.
        - timestamp (datetime): The timestamp when the ticket was created.
        - context_messages (List[str]): List of context message IDs associated with the ticket.
 """
class TicketType(BaseModel):
    id: str
    msg_id: str
    status: str
    resolved_by: Optional[str]
    ts_last_status_change: Optional[datetime]
    timestamp: datetime
    context_messages: List[str]
