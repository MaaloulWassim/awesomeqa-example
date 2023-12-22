import React, { useState } from "react";
import { AuthorType, MessageType } from "../../constants/models";
import styles from "./Message.module.css";
import { Typography, Box, Divider, Link } from "@mui/material";
import AuthorCard from "../authorCard/authorCard";

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
  const [showAuthorCard, setShowAuthorCard] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<AuthorType | null>(null);

  const handleAuthorClick = (event,authorData: AuthorType) => {
    event.preventDefault();
    setSelectedAuthor(authorData);
    setShowAuthorCard(true);
  };

  const handleCloseAuthorCard = () => {
    setShowAuthorCard(false);
  };
  return (
    <Box className={styles.messageCard}>
      <Typography variant="h6" className={styles.messageHeader}>
        Message:
      </Typography>
      <Box className={styles.messageItem}>
        <Typography variant="body1" className={styles.messageContent}>
          {content}
        </Typography>
      </Box>
      <Divider />
        <Box>
        <Typography variant="body2">
        Author: <Link href="#" onClick={() => handleAuthorClick(event,author)}> {author.name}</Link>
      </Typography>

      {showAuthorCard && selectedAuthor && (
        <AuthorCard authorData={selectedAuthor} onClose={handleCloseAuthorCard} />
      )}
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
          Message URL: <Link >{msg_url}</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
