import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Ticket from '../../components/ticket/ticket';
import { getTickets,removeTicket  } from '../../services/services';
import { TicketType } from '../../constants/models';
import styles from './TicketsPage.module.css';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await getTickets();
        console.log(response)
        setTickets(response);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);
  const handleDeleteTicket = async (ticketId: string) => {
    try {
      await removeTicket(ticketId);
      setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== ticketId));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };
  return (
    <div className={styles.ticketsContainer}>
    {tickets.map((ticket) => (
      <div key={ticket.id} className={styles.ticketsRow}>
        <Grid item className={styles.ticketsGridItem}>
          <Ticket ticket={ticket} onDelete={handleDeleteTicket}/>
        </Grid>
      </div>
    ))}
  </div>
  );
};

export default TicketsPage;
