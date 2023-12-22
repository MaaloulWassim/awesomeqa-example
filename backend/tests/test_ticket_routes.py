from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_tickets():
    response = client.get("/tickets")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_ticket():
    response = client.get("/tickets/{ticket_id}", params={"ticket_id": "d0925eb4-0af1-4f9b-8753-e043843d3d8d"})
    assert response.status_code == 200
    assert "id" in response.json()

def test_get_tickets_count():
    response = client.get("/ticketscount")
    assert response.status_code == 200
    assert "opened" in response.json()
    assert "closed" in response.json()
    assert "total" in response.json()

def test_remove_ticket():
    response = client.delete("/tickets/{ticket_id}", params={"ticket_id": "d0925eb4-0af1-4f9b-8753-e043843d3d8d"})
    assert response.status_code == 200
    assert "message" in response.json()

def test_get_messages_for_ticket():
    response = client.get("/tickets/{ticket_id}/messages", params={"ticket_id": "d0925eb4-0af1-4f9b-8753-e043843d3d8d"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)
