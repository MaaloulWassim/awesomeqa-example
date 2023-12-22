import React from "react";
import { MessageType } from "../../constants/models";
import styles from "./Message.module.css";
import { Typography, Box, Divider, Link } from "@mui/material";

type MessageProps = {
  message: MessageType;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const {
    id,
    timestamp,
    author,
    content,
    msg_url,
    has_attachment,
    reference_msg_id,
  } = message;

  return (
    <Box className={styles.messageCard}>
      <Typography variant="h6" className={styles.messageHeader}>
        Message ID: {id}
      </Typography>
      <Divider />

      <Box className={styles.messageItem}>
        <Typography variant="body1" className={styles.messageContent}>
          {content}
        </Typography>
      </Box>
      <Divider />
        <Box>
        <Typography variant="body2" className={styles.messageDetails}>
          Author: <Link href="#">{author.name}</Link>
        </Typography>
        </Box>
        <Divider />
      <Box className={styles.messageItem}>
        <Typography variant="body2" className={styles.messageDetails}>
          Timestamp: {timestamp}
        </Typography>
      
        <Typography variant="body2" className={styles.messageDetails}>
          Attachment: {has_attachment ? "Yes" : "No"}
        </Typography>
        <Typography variant="body2" className={styles.messageDetails}>
          Reference Message ID: {reference_msg_id || "N/A"}
        </Typography>
       
      </Box>
      <Divider />
      <Box>
      <Typography variant="body2" className={styles.messageDetails}>
          Message URL: {msg_url}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
