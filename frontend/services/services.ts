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
export const getTicketById = async (ticketId: string): Promise<TicketType>  => {
  try {
    const response = await axios.get<TicketType>(`${API_BASE_URL}/tickets/${ticketId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTicketsCount = async (): Promise<any> => {
  try {
    const response = await axios.get<any>(`${API_BASE_URL}/ticketscount`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets count:", error);
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

export const getMessageById = async (msg_id: string): Promise<MessageType>  => {
  try {
    const response = await axios.get<MessageType>(`${API_BASE_URL}/messages/${msg_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMessagesForTicket = async (ticketId: string): Promise<MessageType[]>  => {
  try {
    const response = await axios.get<MessageType[]>(`${API_BASE_URL}/tickets/${ticketId}/messages`);
    return response.data;
  } catch (error) {
    throw error;
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