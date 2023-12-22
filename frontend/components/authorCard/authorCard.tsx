import React from 'react';
import { Box, Divider, Link, Typography } from '@mui/material';
import { AuthorType } from '../../constants/models';
import Image from 'next/image';
import styles from './AuthorCard.module.css'

type AuthorCardProps = {
  authorData: AuthorType;
  onClose: () => void;
};

const AuthorCard: React.FC<AuthorCardProps> = ({ authorData, onClose }) => {
  const { name, nickname, color, discriminator, avatar_url, is_bot, timestamp_insert } = authorData;
  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
  };
  
  return (
    <Box>
      <Box className={styles.authorCard}>
      <Box className={styles.avatar}>
        <img src={avatar_url} alt={`${name}'s Avatar`} />
      </Box>
      <Typography variant="h6" className={styles.name}>
        {name}
      </Typography>
      <Typography variant="body1" className={styles.nickname} style={{color}}>
        {nickname}
      </Typography>
      <Typography variant="body2" className={styles.discriminator}>
        #{discriminator}
      </Typography>
      <Typography variant="body2" className={styles.timestamp}>
        Joined: {timestamp_insert}
      </Typography>
      {is_bot && (
        <Typography variant="body2" className={styles.botTag}>
          BOT
        </Typography>
      )}
      <Divider/>

       <Link href="#">
      <button onClick={handleCloseClick}  className={styles.closeButton}>Close</button>
      </Link>
      </Box>
    </Box>
    
  );
};

export default AuthorCard;
