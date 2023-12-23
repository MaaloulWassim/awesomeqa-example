from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_tickets():
    response = client.get("/tickets")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_ticket():
    ticket_id = "7bb95ee7-feb2-420b-a299-ae945d163c2b"
    response = client.get(f"/tickets/{ticket_id}")
    assert response.status_code == 200
    assert "id" in response.json()

def test_get_tickets_count():
    response = client.get("/ticketscount")
    assert response.status_code == 200
    assert "opened" in response.json()
    assert "closed" in response.json()
    assert "total" in response.json()

def test_remove_ticket():
    ticket_id = "31f46d34-74a9-4102-9149-566f5442292d"
    response = client.delete(f"/tickets/{ticket_id}")
    assert response.status_code == 200
    assert "message" in response.json()

def test_get_messages_for_ticket():
    ticket_id = "7bb95ee7-feb2-420b-a299-ae945d163c2b"
    response = client.get(f"/tickets/{ticket_id}/messages")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
