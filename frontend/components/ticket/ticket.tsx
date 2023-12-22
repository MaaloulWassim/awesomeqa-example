import React, { useEffect, useState } from "react";
import styles from "./Ticket.module.css";
import { Typography, Box,Divider,Button, Link  } from "@mui/material";
import { getMessageById } from "../../services/services";

const Ticket = ({ ticket ,onDelete }) => {
  const { id, msg_id, status, resolved_by, ts_last_status_change, timestamp, context_messages } = ticket;
  const [messageContent, setMessageContent] = useState("");
  useEffect(() => {
    const fetchMessageContent = async () => {
      try {
        const message = await getMessageById(msg_id);
        setMessageContent(message.content);
      } catch (error) {
        console.error('Error fetching message content:', error);
      }
    };

    if (msg_id) {
      fetchMessageContent();
    }
  }, [msg_id]);
  const handleDeleteClick = () => {
    onDelete(id);
  };
  return (
    <Box className={styles.card}>
   {messageContent && (
        <>
          <Box className={styles.item}>
            <Typography variant="h6" className={styles.header}>
              Message Content:
            </Typography>
            <Typography className={styles.data}>{messageContent}</Typography>
          </Box>
        </>
      )}
    <Divider/> 
    <Box className={styles.item}>
      <Typography variant="h6" className={styles.header}>Status:</Typography>
      <Typography className={`${styles.status} ${status === 'closed' ? styles.closed : styles.open}`}>
      {status}
     </Typography>
    </Box>
    <Divider />
    <Box className={styles.item}>
      <Typography variant="h6" className={styles.header}>Timestamp:</Typography>
      <Typography className={styles.data}>{timestamp}</Typography>
    </Box>
    <Divider />
    <Box className={styles.item}>
      <Typography variant="h6" className={styles.header}>Resolved By:</Typography>
      <Typography className={styles.data}>{resolved_by || "Not resolved yet"}</Typography>
    </Box>
    <Divider />
    <Box className={styles.item}>
      <Typography variant="h6" className={styles.header}>Last Status Change:</Typography>
      <Typography className={styles.data}>{ts_last_status_change || "N/A"}</Typography>
    </Box>
    <Divider />
    <Box className={styles.item}>
      <Typography variant="h6" className={styles.header}>
       Context Messages:
      </Typography>
         <Link href={`messages?id=${id}`} className={styles.link}>
           <Button variant="outlined" >View Messages</Button>
         </Link>
    </Box>

      <Divider />
      <div>
        <Button className={styles.deleteButton} variant="outlined" color="error" onClick={handleDeleteClick}>
          Delete
        </Button>
      </div>
  </Box>
  );
};

export default Ticket;
