from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from .author_model import Author

class MessageType(BaseModel):
    id: str
    channel_id: str
    parent_channel_id: Optional[str]
    community_server_id: str
    timestamp: datetime
    has_attachment: bool
    reference_msg_id: str
    timestamp_insert: datetime
    discussion_id: str
    author_id: str
    content: str
    msg_url: str
    author: Author
