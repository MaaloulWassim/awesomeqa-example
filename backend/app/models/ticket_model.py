from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class TicketType(BaseModel):
    id: str
    msg_id: str
    status: str
    resolved_by: Optional[str]
    ts_last_status_change: Optional[datetime]
    timestamp: datetime
    context_messages: List[str]
