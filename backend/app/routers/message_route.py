from fastapi import APIRouter, Depends, HTTPException
from app.repositories.message_repository import MessageRepository
from app.models.message_model import MessageType
from app.config import TICKET_FILEPATH
from typing import List

router = APIRouter()

@router.get("/messages/{msg_id}", response_model=MessageType)
async def get_message(msg_id: str, message_repository: MessageRepository = Depends(lambda: MessageRepository(filepath=TICKET_FILEPATH))):
    message = message_repository.get_message_by_id(msg_id)
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    return message

@router.get("/messages", response_model=List[MessageType])
async def get_all_messages(start: int = 0, stop: int = 20,message_repository: MessageRepository = Depends(lambda: MessageRepository(filepath=TICKET_FILEPATH))):
    messages = message_repository.get_all_messages(start, stop)
    return messages