from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_message():
    response = client.get("/messages/{msg_id}", params={"msg_id": "1169546749317234742"})
    assert response.status_code == 200
    assert "id" in response.json()

def test_get_all_messages():
    response = client.get("/messages")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_author_by_message_id():
    response = client.get("/messages/{msg_id}/author", params={"msg_id": "1169546749317234742"})
    assert response.status_code == 200
    assert "id" in response.json()
