import json
from typing import Optional, List
from app.models.message_model import MessageType

class MessageRepository:
    def __init__(self, filepath: str):
        self.filepath = filepath
        with open(filepath) as json_file:
            self.data = json.load(json_file)


    def get_all_messages(self, start: Optional[int] = None, stop: Optional[int] = None) -> List[MessageType]:
        return [MessageType(**message) for message in self.data["messages"][start:stop]]  


    def get_message_by_id(self, msg_id: str) -> Optional[MessageType]:
        for message in self.data["messages"]:
            if message["id"] == msg_id:
                return MessageType(**message)
        return None
