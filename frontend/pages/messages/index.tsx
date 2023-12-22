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
    const fetchMessages = async () => {
      try {
        const response = await getMessagesForTicket(id as string);
        console.log(response)
        setMessages(response);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    const fetchTicket = async () => {
      try {
        const response = await getTicketById(id as string);
        console.log(response)
        setTicket(response);
      } catch (error) {
        console.error('Error fetching ticket:', error);
      }
    };
    const fetchMessageContent = async () => {
      try {
        const response = await getMessageById(ticket.msg_id as string);
        console.log(response)
        setMessage(response);
      } catch (error) {
        console.error('Error fetching ticket:', error);
      }
    };
    if (id) {
      fetchMessages();
      fetchTicket();
      fetchMessageContent();
    }
  }, [id]);

  if (!messages.length) {
    return <div>No messages found.</div>;
  }

  return (
    <div>
      <h4>Messages Related to : {message.content}</h4>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessagesPage;
