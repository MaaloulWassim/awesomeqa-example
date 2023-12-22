import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Ticket from '../../components/ticket/ticket';
import { getTickets,getTicketsCount,removeTicket  } from '../../services/services';
import { TicketType } from '../../constants/models';
import styles from './TicketsPage.module.css';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketsCount, setTicketsCount] = useState({ opened: 0, closed: 0, total: 0 });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ticketsData, countData] = await Promise.all([getTickets(), getTicketsCount()]);
        setTickets(ticketsData);
        setTicketsCount(countData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleDeleteTicket = async (ticketId) => {
    try {
      const response = await removeTicket(ticketId);
      if (response.message === 'Ticket removed successfully') {
        const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
        setTickets(updatedTickets);

        const updatedCount = { ...ticketsCount };
        const deletedTicket = tickets.find((ticket) => ticket.id === ticketId);

        if (deletedTicket) {
           if (deletedTicket.status === 'closed') {
             updatedCount.closed -= 1;
          } else {
             updatedCount.opened -= 1;
          }
          updatedCount.total -= 1;
          setTicketsCount(updatedCount);
        }
      }
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };
  return (
    <>
    <Typography className={styles.ticketCount}>
      Total: {ticketsCount.total}  -  Open: {ticketsCount.opened}  -  Closed: {ticketsCount.closed}
      </Typography>
    <div className={styles.ticketsContainer}>
      {tickets.map((ticket) => (
        <div key={ticket.id} className={styles.ticketsRow}>
          <Grid item className={styles.ticketsGridItem}>
            <Ticket ticket={ticket} onDelete={() => handleDeleteTicket(ticket.id)} />
          </Grid>
        </div>
      ))}
    </div></>
  );
};

export default TicketsPage;
