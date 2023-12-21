import axios from "axios";
import { AuthorType, MessageType, TicketType } from "../constants/models";

const API_BASE_URL = "http://localhost:5001";

export const getTickets = async (): Promise<TicketType[]> => {
  try {
    const response = await axios.get<TicketType[]>(`${API_BASE_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const removeTicket = async (ticketId: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/tickets/${ticketId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMessageById = async (messageId: string): Promise<MessageType>  => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages/${messageId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAuthorByMessageId = async (messageId: string): Promise<AuthorType>  => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages/${messageId}/author`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};