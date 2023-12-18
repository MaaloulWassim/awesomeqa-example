from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from .author_model import Author

"""
Pydantic model representing information about a message type.
Attributes:
        - id (str): The unique identifier of the message.
        - channel_id (str): The channel ID where the message was posted.
        - parent_channel_id (Optional[str]): The parent channel ID if applicable.
        - community_server_id (str): The ID of the community server.
        - timestamp (datetime): The time when the message was posted.
        - has_attachment (bool): Indicates whether the message has an attachment.
        - reference_msg_id (str): The reference message ID.
        - timestamp_insert (datetime): The timestamp when the message was inserted.
        - discussion_id (str): The ID of the discussion.
        - author_id (str): The ID of the message author.
        - content (str): The content of the message.
        - msg_url (str): The URL link to the message.
        - author (Author): Information about the author of the message.
"""
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
