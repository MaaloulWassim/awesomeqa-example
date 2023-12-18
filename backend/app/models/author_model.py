from pydantic import BaseModel
from datetime import datetime

"""
Pydantic model representing information about an author.
Attributes:
        - id (str): The unique identifier of the author.
        - name (str): The name of the author.
        - nickname (str): The nickname of the author.
        - color (str): The color associated with the author.
        - discriminator (str): The discriminator of the author.
        - avatar_url (str): The URL of the author's avatar.
        - is_bot (bool): Indicates whether the author is a bot.
        - timestamp_insert (datetime): The timestamp when the author was created.
"""
class Author(BaseModel):
    id: str
    name: str
    nickname: str
    color: str
    discriminator: str
    avatar_url: str
    is_bot: bool
    timestamp_insert: datetime
