import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMessageById, getMessagesForTicket, getTicketById } from '../../services/services';
import { MessageType, TicketType } from '../../constants/models';
import Message from '../../components/message/message';

const MessagesPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [ticket, setTicket] = useState<TicketType>();
  const [message, setMessage] = useState<MessageType>();
  useEffect(() => {
    let isMounted = true;
  
    const fetchData = async () => {
      try {
        const ticketResponse = await getTicketById(id as string);
        if (isMounted) {
          setTicket(ticketResponse);
        }
  
        const messagesResponse = await getMessagesForTicket(id as string);
        if (isMounted) {
          setMessages(messagesResponse);
        }
  
        if (ticketResponse && ticketResponse.msg_id) {
          const messageResponse = await getMessageById(ticketResponse.msg_id);
          if (isMounted) {
            setMessage(messageResponse);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    if (id && !ticket && !messages.length && !message) {
      fetchData();
    }
  
    return () => {
      isMounted = true;
    };
  }, [id, ticket, messages, message]);
  

  if (!messages.length) {
    return <div>No messages found.</div>;
  }

  return (
    <div>
      <h4>Messages Related to : {message?.content}</h4>
      {messages.map((message:MessageType) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessagesPage;
