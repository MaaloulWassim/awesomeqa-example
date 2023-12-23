from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_message():
    msg_id = "1169546749317234742"
    response = client.get(f"/messages/{msg_id}")
    assert response.status_code == 200
    assert "id" in response.json()

def test_get_all_messages():
    response = client.get("/messages")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_author_by_message_id():
    msg_id = "1169546749317234742"
    response = client.get(f"/messages/{msg_id}/author")
    assert response.status_code == 200
    assert "id" in response.json()
