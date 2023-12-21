import axios from "axios";
import { TicketType } from "../constants/models";

const API_BASE_URL = "http://localhost:5001";

export const getTickets = async (): Promise<any> => {
  try {
    const response = await axios.get<any>(`${API_BASE_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};
