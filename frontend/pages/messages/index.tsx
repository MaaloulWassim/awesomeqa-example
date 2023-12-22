import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMessagesForTicket } from '../../services/services';
import { MessageType } from '../../constants/models';
import Message from '../../components/message/message';

const MessagesPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessagesForTicket(id as string);
        console.log(response)
        setMessages(response);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    if (id) {
      fetchMessages();
    }
  }, [id]);

  if (!messages.length) {
    return <div>No messages found.</div>;
  }

  return (
    <div>
      <h2>Messages for Ticket ID: {id}</h2>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessagesPage;
